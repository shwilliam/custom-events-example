import getTime from './utils/getTime'

const Notifications = selector => {
  const el = document.getElementById(selector)
  const notify = message =>
    (el.innerText = `New ${
      message.length
    } character message at ${getTime()}`)

  return {
    notify,
  }
}

export default Notifications
