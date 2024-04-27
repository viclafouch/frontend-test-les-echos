import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NewsletterCta from '@/components/NewsletterListItem/NewsletterCta'
import { NewsletterItem } from '@/constants/newsletter'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Skeleton
} from '@nextui-org/react'

export type NewsletterListItemProps = { className?: string } & (
  | {
      article: NewsletterItem
      isLoading?: never
    }
  | {
      article?: never
      isLoading: true
    }
)

const NewsletterListItem = ({
  className = '',
  article
}: NewsletterListItemProps) => {
  return (
    <Card className={className}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {article ? (
          <div className="w-full">
            <Link href="/">
              <h4 className="font-semibold text-medium truncate">
                {article.title}
              </h4>
            </Link>
          </div>
        ) : (
          <Skeleton className="w-2/5 rounded-lg">
            <div className="w-full text-medium">
              <span className="bg-default-200">{'\u00A0'}</span>
            </div>
          </Skeleton>
        )}
      </CardHeader>
      <CardBody className="grow-0 overflow-visible">
        <div className="relative h-[150px] aspect-video w-full">
          {article ? (
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 150px"
              fill
              src={article.image}
              alt={article.title}
            />
          ) : (
            <Skeleton className="rounded-lg w-full h-full" />
          )}
        </div>
        <div className="mt-2 w-full">
          {article ? (
            <div className="truncate">{article.description}</div>
          ) : (
            <Skeleton className="w-full rounded-lg">
              <div className="w-full text-medium">
                <span className="bg-default-200">{'\u00A0'}</span>
              </div>
            </Skeleton>
          )}
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-end">
        {article ? (
          <NewsletterCta
            subscriptionsRequired={article.subscriptions}
            size="sm"
          />
        ) : (
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-7 w-full rounded-lg bg-default-200" />
          </Skeleton>
        )}
      </CardFooter>
    </Card>
  )
}

export default NewsletterListItem
