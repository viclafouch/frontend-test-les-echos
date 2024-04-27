'use client'

import React from 'react'
import { User } from '@/constants/user'
import { UserContextValue } from '@/store/User'
import {
  Button,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User as NextUiUser
} from '@nextui-org/react'
import SignOut from './SignOut'

export type UserPopoverProps = {
  user: User
  loginAs: UserContextValue['loginAs']
}

const UserPopover = ({ user, loginAs }: UserPopoverProps) => {
  return (
    <Popover placement="bottom" showArrow offset={10}>
      <PopoverTrigger>
        <Button variant="solid" disableRipple className="bg-transparent">
          <NextUiUser
            className="cursor-pointer p-0"
            classNames={{
              wrapper: 'hidden md:block'
            }}
            name=""
            description={user.email}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-2 gap-2">
        <div className="flex flex-col w-full gap-2">
          <Button size="sm" onClick={loginAs.USER_WITHOUT_SUBSCRIPTION}>
            Sans abonnement
          </Button>
          <Button size="sm" onClick={loginAs.USER_WITH_ONE_SUBSCRIPTION}>
            Avec 1 abonnement
          </Button>
          <Button size="sm" onClick={loginAs.USER_WITH_MULTIPLE_SUBSCRIPTION}>
            Avec plusieurs abonnements
          </Button>
        </div>
        <Divider className="sm:hidden" />
        <SignOut />
      </PopoverContent>
    </Popover>
  )
}

export default UserPopover
