import React from 'react'
import * as R from 'remeda'
import NewsletterListItem from '@/components/NewsletterListItem'
import { NewsletterItem } from '@/constants/newsletter'
import { cn } from '@/utils/cn'
import { Divider } from '@nextui-org/react'

export type NewsletterListProps =
  | {
      getPromise: Promise<NewsletterItem[]>
      isLoading?: never
    }
  | {
      isLoading: true
      getPromise?: never
    }

const WrapperList = ({
  className,
  ...restPropsDiv
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'py-4 grid w-full gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        className
      )}
      {...restPropsDiv}
    />
  )
}

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8] as const

const NewsletterList = ({ isLoading, getPromise }: NewsletterListProps) => {
  if (isLoading) {
    return (
      <WrapperList>
        {skeletons.map((skeletonId) => {
          return <NewsletterListItem key={skeletonId} isLoading />
        })}
      </WrapperList>
    )
  }

  const items = React.use(getPromise)
  // Maybe better in promise (will be cached)
  const itemsGroupped = R.groupBy(items, (item) => {
    return item.site
  })

  return (
    <div className="flex flex-col gap-5">
      {Object.keys(itemsGroupped).map((site, index, array) => {
        return (
          <React.Fragment key={site}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-left font-semibold text-large truncate">
                  {site}
                </h3>
                <span className="text-tiny">
                  ({itemsGroupped[site].length} élements)
                </span>
              </div>
              <WrapperList>
                {itemsGroupped[site].map((item) => {
                  return <NewsletterListItem key={item.id} article={item} />
                })}
              </WrapperList>
            </div>
            {index + 1 > array.length - 1 ? null : <Divider />}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default NewsletterList
