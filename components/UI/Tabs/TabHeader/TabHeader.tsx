import { useRef } from 'react'
import classes from './TabHeader.module.scss'
import clsx from 'clsx'
import Wrapper from '../../Wrapper/Wrapper'

interface TabHeaderProps {
  tabs: {
    id: number
    title: string
  }[]
  activeId: number
  onSelect: (id: number) => void
  classNames?: {
    header?: string
    list?: string
    item?: string
    button?: string
    activeButton?: string
    tracker?: string
  }
}

function TabHeader({tabs, activeId, onSelect, classNames}: TabHeaderProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const headerClasses: string[] = [classes.Header]
  const listClasses: string[] = [classes.List]
  const itemClasses: string[] = [classes.Item]
  if (classNames?.header) headerClasses.push(classNames.header)
  if (classNames?.list) listClasses.push(classNames.list)
  if (classNames?.item) itemClasses.push(classNames.item)

  return (
    <header className={headerClasses.join(' ')}>
      <ul className={listClasses.join(' ')}>
        {tabs.map(({id, title}, index) =>
          <li
            key={id}
            className={itemClasses.join(' ')}
          >
            <button
              ref={id === activeId ? buttonRef : null}
              onClick={() => {
                onSelect(id)
              }}
              className={`${classes.Button} ${classNames?.button ? classNames.button : ''} ${activeId === id ? `${classes.Active} ${classNames?.activeButton ? classNames?.activeButton : ''}` : ''}`}>

              {title}
            </button>
          </li>
        )}
      </ul>
    </header>
  )
}

export default TabHeader