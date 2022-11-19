import { ReactNode, useState } from 'react'
import classes from './Tabs.module.scss'
import { getMinId } from '../../../utils/helpers/getMinId/getMinId'
import TabHeader from './TabHeader/TabHeader'

interface TabsProps {
  children: ReactNode
  classNames?: {
    tracker?: string
    header?: string
    list?: string
    item?: string
    button?: string
    activeButton?: string
  }
  defaultActive?: number
}

function Tabs({children, classNames, defaultActive}: TabsProps) {
  const tabsHeader: { id: number, title: string }[] =
    Array.isArray(children) ? children.map(({props: {title, id}}) => {
      return {title, id}
    }) : []

  const findId: number | undefined = tabsHeader.find(item => item.id === defaultActive)?.id

  const [activeId, setActiveId] = useState(findId || getMinId(tabsHeader.map(tab => tab.id)))

  return (
    <div className={classes.Tabs}>
  
      <TabHeader
        tabs={tabsHeader}
        activeId={activeId}
        onSelect={(id: number) => setActiveId(id)}
        classNames={classNames}
      />
      <div>
        {Array.isArray(children) && children.find(({props: {id}}) => id === activeId)}
      </div>
    
    </div>
  )
}

export default Tabs