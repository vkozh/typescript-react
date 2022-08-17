type StatusProps = {
    status: 'success' | 'loading' | 'error'
}

export default function Status(props: StatusProps) {
    let message;
    if(props.status === 'loading') message="Loading..."
    else if(props.status === 'success') message="Data fetch successfully."
    else if(props.status === 'error') message="Error fetching data."
  return (
    <div>Status: {message}</div>
  )
}
