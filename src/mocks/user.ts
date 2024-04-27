import { User } from '@/constants/user'

const BASE_USER = {
  id: '507f1f77bcf86cd799439011',
  firstName: 'Jamie',
  lastName: 'Doe',
  gender: 'M' as const,
  email: 'jamie.doe@example.com'
}

export const USER_WITH_ONE_SUBSCRIPTION = {
  ...BASE_USER,
  subscriptions: ['RIGHT_1']
} satisfies User

export const USER_WITHOUT_SUBSCRIPTION = {
  ...BASE_USER,
  subscriptions: []
} satisfies User

export const USER_WITH_MULTIPLE_SUBSCRIPTION = {
  ...BASE_USER,
  subscriptions: ['RIGHT_1', 'RIGHT_2']
} satisfies User
