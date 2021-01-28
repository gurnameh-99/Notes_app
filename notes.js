const { default: chalk } = require('chalk')
const fs = require('fs')
const { title } = require('process')

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.bold.inverse("All your notes :"))
    notes.forEach(note => console.log(chalk.magenta.italic(note.title)));
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    } else {
        console.log(chalk.red.inverse('title already taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title !== title)
    if (duplicateNotes.length === notes.length) {
        console.log(chalk.red.inverse('No such title!'))
    } else {
        saveNotes(duplicateNotes)
        console.log(chalk.green.inverse('note deleted'))
    }
} 

const readNote = (title) => {
    const notes = loadNotes()
    const thatNote = notes.find((note) => note.title === title)
    if(!thatNote){
        console.log(chalk.red.inverse.bold('No such note'))
    } else {
        console.log(chalk.blue.inverse(thatNote.title))
        console.log(chalk.blue(thatNote.body))
    }

}

const saveNotes = (notes) => {fs.writeFileSync('notes.json', JSON.stringify(notes))}

const loadNotes = () => {
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
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}