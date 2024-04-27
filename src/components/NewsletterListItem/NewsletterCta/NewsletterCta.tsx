'use client'

import React from 'react'
import { Subscription } from '@/constants/subscription'
import { useSession } from '@/store/User'
import { Button, ButtonProps } from '@nextui-org/react'

export type NewsletterCtaProps = {
  subscriptionsRequired: Subscription[]
} & ButtonProps

const NewsletterCta = ({
  subscriptionsRequired,
  ...restButtonProps
}: NewsletterCtaProps) => {
  const { user } = useSession()

  const hasAccess = user
    ? subscriptionsRequired.some((sub) => {
        return user.subscriptions.includes(sub)
      })
    : false

  const text = hasAccess ? "S'inscrire" : "S'abonner"

  return (
    <Button color={hasAccess ? 'primary' : 'secondary'} {...restButtonProps}>
      {text}
    </Button>
  )
}

export default NewsletterCta
