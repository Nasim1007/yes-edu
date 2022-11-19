import { FC, ReactNode } from 'react'
import classes from './TabContent.module.scss'

interface TabContentProps {
  id: number
  title: string
  children: ReactNode
}

const TabContent: FC<TabContentProps> = ({children}) => {

  return (
    <div className={classes.Body}>
      {children}
    </div>
  )
}

export default TabContent