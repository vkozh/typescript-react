type MessageProps = {
    name: string
    count?: number
    isLoggedIn: boolean
}

export default function Message({count = 0, isLoggedIn, name}: MessageProps) {

  return (
    <div>
      {isLoggedIn && 
        `${name}, you have ${count} unread messages.`
      }
      </div>
  )
}
