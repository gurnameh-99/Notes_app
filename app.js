const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1.0')

// add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

// list Command
yargs.command({
    command: 'list',
    describe: 'list all the notes.',
    handler: function(){
        console.log('Listing all the notes.')
    }
})

// read Command
yargs.command({
    command: 'read',
    describe: 'To read a note.',
    handler: function(){
        console.log('reading this note.')
    }
})

yargs.parse()