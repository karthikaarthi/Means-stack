const events = require('events')

 const myevent = new events.EventEmitter()

myevent.on('hello',()=>{
  console.log('hello every body')
})

myevent.on('myevent',()=>{
  console.log('my event......')
})
 myevent.emit('hello')
 myevent.emit('myevent')