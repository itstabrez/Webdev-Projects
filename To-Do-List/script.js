const textbox = document.querySelector("#to-do-text");
const listItem = document.querySelector("#lists");

textbox.addEventListener("keyup" , function(event){
    if(event.key=="Enter"){
        if(this.value !== ""){
        addToDo(this.value);
        this.value = "";
        }
    }
})

const addToDo = (data) => {
    const toDoNotes = document.createElement("li");
    toDoNotes.innerHTML = `
    ${data}
    <i class="fa-solid fa-xmark"></i>
    `

   toDoNotes.addEventListener("click" , function (event) {
        this.classList.toggle('done');
    })

    toDoNotes.querySelector("i").addEventListener("click" , function() {
        toDoNotes.remove();
    })

    listItem.appendChild(toDoNotes);
}