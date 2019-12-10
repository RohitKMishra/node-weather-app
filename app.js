const chalk = require('chalk')
const notes = require('./notes.js');
const yargs = require('yargs')



// Customized args version
yargs.version('1.1.1')

yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder: {
        title:{
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
    handler: function(argv){
        console.log('Adding  anote', argv)
        notes.addNote(argv.title, argv.body)
    }
})
// const add = require('./utils.js')

// const sum = add(2,4)
// console.log(sum)

yargs.command({
    command: 'read',
    describe: 'Reading notes',
    builder : {
        title:{
            describe:'Note Book',
            demandOption: true,
            type: 'string'

        }
       },
    handler (argv){
    notes.readNote(argv.title, argv.body)   
    }
})

yargs.command ({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
       title: {
           describe: 'Note title',
           demandOption: true,
           type: 'string'
       }
    //     body :{
    //         describe:'Note Body',
    //         demandOption: true,
    //         type: 'string'
    //     }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})


yargs.command ({
    command: 'list',
    describe: 'List all notes',
 
    handler (argv){
        notes.listNotes(argv.title, argv.body)
    }
})
yargs.parse()