let addNoteBtn = document.getElementById("addNoteBtn")
let notesContainer = document.getElementById("notesContainer")

let notes = JSON.parse(localStorage.getItem("notes")) || []

function renderNotes() {
    notesContainer.innerHTML = `
        <div class="note">
            <textarea class="note-text" id="textarea" placeholder="Write your note..."></textarea>
            <div class="note-actions">
                <button class="delete-btn" data-index="first">Delete</button>
            </div>
        </div>
    `
    notes.forEach((note, index) => {
        notesContainer.innerHTML += `
            <div class="note">
                <textarea class="note-text" placeholder="Write your note...">${note.note}</textarea>
                <div class="note-actions">
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </div>
            </div>`
    })
    localStorage.setItem("notes", JSON.stringify(notes))
}

addNoteBtn.addEventListener("click", () => {
    let textArea = document.getElementById("textarea")
    let inputText = textArea.value.trim()
    if (inputText === "") return
    notes.push({ note: inputText })
    renderNotes()
    console.log("added Successfully")
})

notesContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        let index = e.target.dataset.index
        if (index === "first") {
            document.getElementById("textarea").value = ""
        } else {
            notes.splice(Number(index), 1)
            renderNotes()
            console.log("removed Successfully")
        }
    }
})

renderNotes()