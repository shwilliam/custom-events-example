const Chat = selector => {
  const el = document.getElementById(selector)

  const append = message => {
    const newMessageEl = document.createElement('li')
    newMessageEl.innerText = message
    el.appendChild(newMessageEl)
  }

  return {
    append,
  }
}

export default Chat
