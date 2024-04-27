import React from 'react'
import { z } from 'zod'
import Container from '@/components/Container'
import NewsletterList from '@/components/NewsletterList'
import { newsletterItemSchema } from '@/constants/newsletter'

export async function getNewsletter() {
  // I have never tried a fetch inside a RSC to the api routes
  // Don't do that ^^
  // Prefer DB
  // https://nextjs-faq.com/fetch-api-in-rsc
  const response = await fetch('http://localhost:3000/api/newsletter', {
    cache: 'no-cache'
  })
  const result = await response.json()

  return z.array(newsletterItemSchema).parse(result)
}

const Page = () => {
  // From page, and not directly from `NewsletterList` component.
  // This promise will maybe use searchParams in a future, or will be shared to other components.
  const newsletterPromise = getNewsletter()

  return (
    <Container className="py-6">
      <div className="flex flex-col gap-12">
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-3xl">Newsletter</h1>
          <p>
            Dans cette page, vous retrouvez l&apos;ensemble des newsletters des
            Echos.
          </p>
        </div>
        <React.Suspense fallback={<NewsletterList isLoading />}>
          <NewsletterList getPromise={newsletterPromise} />
        </React.Suspense>
      </div>
    </Container>
  )
}

export default Page
