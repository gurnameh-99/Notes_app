const fs = require('fs')

const getNotes = function () {
    let str = "Your notes ..."
    return str
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new note added')
    } else {
        console.log('title already taken')
    }
}

const removeNote = function (title) {
    console.log(title + ' Note removed!')
} 

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const defaultBuffer = fs.readFileSync('notes.json')
        const dataJSON = defaultBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }

}
module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    removeNote: removeNote
}