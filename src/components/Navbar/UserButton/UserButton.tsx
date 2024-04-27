'use client'

import React from 'react'
import { useSession } from '@/store/User'
import SignIn from './SignIn'
import UserPopover from './UserPopover'

const UserButton = () => {
  const session = useSession()

  if (!session?.user) {
    return <SignIn />
  }

  return <UserPopover loginAs={session.loginAs} user={session.user} />
}

export default UserButton
