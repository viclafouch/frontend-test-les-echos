export const SUBSCRIPTIONS = ['RIGHT_1', 'RIGHT_2'] as const
export type Subscription = (typeof SUBSCRIPTIONS)[number]
