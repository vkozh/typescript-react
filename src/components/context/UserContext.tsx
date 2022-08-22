import { createContext, useState } from "react"

export type AuthUser = {
    name: string
    email: string
}

type UserContextProvideProp = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvide = ({children}: UserContextProvideProp) => {
    const [user, setUser] = useState<AuthUser | null>(null);

    return(
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
    )
}