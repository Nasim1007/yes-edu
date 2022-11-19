import classes from './Grid.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface GridProps {
  children: ReactNode
  className?: string
}

function Grid({children, className}: GridProps) {
  return (
    <div className={clsx(classes.Grid, className)}>
      {children}
    </div>
  )
}

export default Grid