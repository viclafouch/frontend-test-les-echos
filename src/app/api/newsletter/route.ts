import { NEWSLETTER_ITEMS } from '@/mocks/newsletters'

export async function GET() {
  const items = await Promise.resolve(NEWSLETTER_ITEMS)

  return Response.json(items)
}
