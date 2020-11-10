
const writeEvent = (text) => {
      const parent = document.getElementById("events");
      const ele = document.createElement("li");
      ele.innerHTML = text;
      parent.appendChild(ele);
};

writeEvent('We Welcome You From JS');

const sock = io();

sock.on('message', (text) => {
      writeEvent(text);
});

const onFormSubmitted = (e) => {
      e.preventDefault();

      const msg = document.getElementById("input_msg");
      const text = msg.value;
      msg.innerHTML = '';

      sock.emit('message', text);
};

document.querySelector('#chat-area').addEventListener('submit', onFormSubmitted);