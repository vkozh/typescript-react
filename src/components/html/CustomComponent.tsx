import React from 'react'
import Message from '../Message'

export const CustomComponent = (props: React.ComponentProps<typeof Message>) => {
  return (
    <div>{props.isLoggedIn}</div>
  )
}
