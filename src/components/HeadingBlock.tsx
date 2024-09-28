import React from 'react'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const subheadingVariants = cva('uppercase', {
  variants: {
    subheadingColor: {
      default: 'text-brown',
      white: 'text-white',
    },
  },
  defaultVariants: {
    subheadingColor: 'default',
  },
})

const headingVariants = cva('header-2 uppercase', {
  variants: {
    headingColor: {
      default: 'text-black',
      white: 'text-white',
    },
  },
  defaultVariants: {
    headingColor: 'default',
  },
})

interface HeadingBlockProp {
  subheading?: string
  heading: string
  className?: string
  children?: React.ReactNode
  subheadingColor?: 'default' | 'white'
  headingColor?: 'default' | 'white'
}

const HeadingBlock = ({
  subheading,
  heading,
  className,
  children,
  subheadingColor = 'default', // Default value
  headingColor = 'default', // Default value
}: HeadingBlockProp) => {
  return (
    <React.Fragment>
      <div className="space-y-4">
        <div className={cn('space-y-1', className)}>
          {subheading && (
            <span className={cn(subheadingVariants({ subheadingColor }))}>{subheading}</span>
          )}
          <div className={cn(headingVariants({ headingColor }))}>
            <h2>{heading}</h2>
          </div>
        </div>
        {children && <div className="space-y-10">{children}</div>}
      </div>
    </React.Fragment>
  )
}

export default HeadingBlock
