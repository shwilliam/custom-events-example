const ChatForm = selector => {
  const el = document.getElementById(selector)
  const messageInput = el.querySelector('input')

  const newMessageEvent = new CustomEvent('new-message', {
    detail: {text: () => messageInput.value},
  })

  el.addEventListener('submit', e => {
    e.preventDefault()
    el.dispatchEvent(newMessageEvent)
    messageInput.value = ''
  })

  return el
}

export default ChatForm
