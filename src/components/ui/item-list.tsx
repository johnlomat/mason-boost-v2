import React from 'react'
import { cva } from 'class-variance-authority'
import { FaRegCheckCircle } from 'react-icons/fa'

import { cn } from '@/lib/utils'

const indentVariants = cva('space-y-2 font-roboto font-medium', {
  variants: {
    indent: {
      default: 'ps-5',
      sm: 'ps-4',
      md: 'ps-6',
      lg: 'ps-8',
      xl: 'ps-10',
    },
  },
  defaultVariants: {
    indent: 'default',
  },
})

interface ItemListProp {
  items: string[]
  indent?: 'default' | 'sm' | 'md' | 'lg' | 'xl'
  useIcon?: boolean
}

const ItemList = ({ items, indent, useIcon }: ItemListProp) => {
  return (
    <React.Fragment>
      {!useIcon ? (
        <ul className={cn(indentVariants({ indent }))}>
          {items.map((item, key) => (
            <li key={key} className="list-disc">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <ul className={cn(indentVariants({ indent }))}>
          {items.map((item, key) => (
            <li key={key} className="flex gap-x-4">
              <div className="mt-[0.05rem] h-5 w-5 text-[1.2rem] text-[#E58D35]">
                <FaRegCheckCircle />
              </div>
              {item}
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  )
}

export default ItemList
