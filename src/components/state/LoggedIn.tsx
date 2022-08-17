import React, { useState } from 'react'

type AuthProps = {
    name: string
    email: string
}

export default function LoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState<AuthProps | null>(null)
    const [guest, setGuest] = useState<AuthProps>({} as AuthProps)
    const handleLogin = () => {
        setIsLoggedIn(true)
        setUser({
            name: "Lera",
            email: 'example@example.com'
        })
        setGuest({
            name: 'GuestName',
            email: 'guest@example.com'
        })
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
        setUser(null)
    }
  return (
    <>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    <div>{isLoggedIn ? 'logged in' : 'logged out'}</div>
    {isLoggedIn ? <p>name: {user?.name}, email: {user?.email}</p> : ''}
    <p>Guest: {guest.name} - {guest.email}</p>
    </>
  )
}
