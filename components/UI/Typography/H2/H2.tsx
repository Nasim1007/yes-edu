import classes from './H2.module.scss'
import { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface H2Props extends HTMLAttributes<HTMLHeadingElement> {
  className?: string
  tagName?: 'h3' | 'h2'
  children: ReactNode
}

function H2({className, tagName: Tag = 'h2', children, ...keys}: H2Props) {

  return (
    <Tag
      className={clsx(classes.Title, className)}
      {...keys}
    >{children}</Tag>
  )
}

export default H2