shownotes();
let btn = document.getElementById("btn1");
btn.addEventListener("click",(e)=>{
    let addtext = document.getElementById("addNote");
    let addtext1 = document.getElementById("addtitle");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    let myobj = {
        title: addtext1.value,
        text : addtext.value
    }
    notesobj.push(myobj);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addtext.value = "";
    addtext1.value = "";
    shownotes();
})
function shownotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    let html = "";
    let html1 = "";
    notesobj.forEach(function(element,index) {
        html += `
        <div id="note-1" class="note-1">
            <h3>Note ${index+1}</h3>
            <h3>${element.title}</h3>
            <p id="para">${element.text}</p>
            <button class="btn3" id="${index}" onclick = "deletenotes(this.id)" >Delete Now</button>
        </div> 
        `;
    });
    let get_class = document.getElementById("ynotes");
    console.log(get_class);
    if(get_class.clientHeight != 0){
        get_class.innerHTML = html;
    }else{
        get_class.innerHTML = `nothing, please add the notes...`;
    }
}
function deletenotes(index){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes();
}
let search = document.getElementById("btn").addEventListener("click", function(e){
    let searchtxt = document.getElementById("searchtxt");
    let inputval = searchtxt.value.toLowerCase();
    let notecard = document.getElementsByClassName("note-1");
    let get_class = document.getElementById("ynotes");
    Array.from(notecard).forEach(function(element){
        let cardtxt= element.getElementsByTagName("h3")[1].innerHTML;
        if(cardtxt.includes(inputval)){
            element.style.display = "block";
        }
        else{
            get_class.innerHTML = `not found...`;
            element.style.display = "none";
        }
    })
})


