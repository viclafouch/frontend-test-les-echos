import { z } from 'zod'
import { SUBSCRIPTIONS } from '@/constants/subscription'

export const newsletterItemSchema = z.object({
  id: z.string(),
  image: z.string(),
  description: z.string(),
  title: z.string(),
  site: z.enum(['DEN', 'DAN', 'SAN', 'LAN']),
  subscriptions: z.array(z.enum(SUBSCRIPTIONS))
})

export type NewsletterItem = z.infer<typeof newsletterItemSchema>
export type NewsletterSite = NewsletterItem['site']
