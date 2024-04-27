import React from 'react'
import { User } from '@/constants/user'
import {
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION
} from '@/mocks/user'

export type UserContextValue = {
  loginAs: {
    USER_WITH_ONE_SUBSCRIPTION: () => void
    USER_WITHOUT_SUBSCRIPTION: () => void
    USER_WITH_MULTIPLE_SUBSCRIPTION: () => void
  }
  signOut: () => void
  user: User | null
}

export const UserContext = React.createContext<UserContextValue>(null as never)

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<UserContextValue['user']>(
    USER_WITH_ONE_SUBSCRIPTION
  )

  // Omg give me my React 19 Compiler
  const actions = React.useRef({
    loginAs: {
      USER_WITH_ONE_SUBSCRIPTION: () => {
        return setUser(USER_WITH_ONE_SUBSCRIPTION)
      },
      USER_WITHOUT_SUBSCRIPTION: () => {
        return setUser(USER_WITHOUT_SUBSCRIPTION)
      },
      USER_WITH_MULTIPLE_SUBSCRIPTION: () => {
        return setUser(USER_WITH_MULTIPLE_SUBSCRIPTION)
      }
    }
  }).current

  // Context with no selector, but here, it's ok, we only have one reactive value
  const store = React.useMemo(() => {
    return {
      ...actions,
      // Omg give me my React 19 Compiler
      signOut: () => {
        return setUser(null)
      },
      user
    }
  }, [user, actions])

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>
}

export function useSession() {
  const user = React.use(UserContext)

  if (user === null) {
    throw new Error('Need to be inside User provider')
  }

  return user
}

export default UserProvider
