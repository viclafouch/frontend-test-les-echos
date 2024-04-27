'use client'

import React from 'react'
import { useSession } from '@/store/User'
import { Button } from '@nextui-org/react'

const SignOut = () => {
  const session = useSession()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    session.signOut()
  }

  return (
    <Button fullWidth size="sm" color="danger" onClick={handleClick}>
      Se déconnecter
    </Button>
  )
}

export default SignOut
