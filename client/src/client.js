console.log("hello bous");

const log = (text) => {
    console.log("log executed");
    const parent = document.querySelector('#events');
    const el = document.createElement('li');
    el.innerHTML = text;
  
    parent.appendChild(el);
    parent.scrollTop = parent.scrollHeight;
  };

// never declare sock global always pass it as objects
const onChatSubmitted = (sock) => (e) => {
    e.preventDefault();
   
    const input =document.querySelector('#chat');
    const text= input.value;
    console.log(text);
    input.value ='';

    //sends message to server
    sock.emit('message', text);
};

(() =>{
    // following line creates a new connection to the server
    const sock = io(); 
    sock.on('message',log);

    document.querySelector("#chat-form").addEventListener('submit', onChatSubmitted(sock));
})();