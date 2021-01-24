const socket = io()
const myForm = document.querySelector('form')

socket.on('message', (message) => {
    console.log(message)
})



myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const message = e.target.elements.message.value
    socket.emit('sendMessage', message)
    
})
