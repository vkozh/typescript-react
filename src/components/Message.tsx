type MessageProps = {
    name: string
    count?: number
    isLoggedIn: boolean
}

export default function Message(props: MessageProps) {
  const {count = 0} = props;
  return (
    <div>
      {props.isLoggedIn && 
        `${props.name}, you have ${count} unread messages.`
      }
      </div>
  )
}
