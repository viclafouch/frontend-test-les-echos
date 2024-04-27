import { Subscription } from '@/constants/subscription'

export type User = {
  id: string
  firstName: string
  lastName: string
  gender: 'M' | 'F'
  email: string
  subscriptions: Subscription[]
}
