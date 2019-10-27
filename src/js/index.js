import Chat from './chat'
import ChatForm from './chat-form'
import Notifications from './notifications'

const app = (() => {
  const chat = Chat('chat')
  const chatForm = ChatForm('chat-form')
  const notifications = Notifications('notifications')

  chatForm.addEventListener('new-message', e => {
    const message = e.detail.text()

    chat.append(message)
    notifications.notify(message)
  })
})()

export default app
