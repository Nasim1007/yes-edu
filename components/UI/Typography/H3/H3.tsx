import classes from './H3.module.scss'
import { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface H3Props extends HTMLAttributes<HTMLHeadingElement> {
  className?: string
  tagName?: 'h3' | 'h2'
  children: ReactNode
}

function H3({className, tagName: Tag = 'h3', children, ...keys}: H3Props) {

  return (
    <Tag
      className={clsx(classes.Title, className)}
      {...keys}
    >{children}</Tag>
  )
}

export default H3