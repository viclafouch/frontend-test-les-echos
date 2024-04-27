'use client'

import React from 'react'
import { useSession } from '@/store/User'
import { Button } from '@nextui-org/react'
import { UserCircle } from '@phosphor-icons/react/dist/ssr'

const SignIn = () => {
  const session = useSession()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    session.loginAs.USER_WITH_ONE_SUBSCRIPTION()
  }

  return (
    <Button
      color="primary"
      onClick={handleClick}
      size="sm"
      endContent={<UserCircle size={26} />}
    >
      Se connecter
    </Button>
  )
}

export default SignIn
