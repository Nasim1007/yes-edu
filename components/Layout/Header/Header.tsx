import classes from './Header.module.scss'
import Wrapper from '../../UI/Wrapper/Wrapper'
import { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

function Header() {
  const {pathname} = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => {
    setIsOpen(true)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className={clsx(classes.Header, (pathname !== '/') && classes.OtherPage)}>
      <Wrapper className={classes.Wrapper}>
        <Link href="/" className={classes.Logo}>
          <img
            src="/assets/img/logo.png"
            alt="Yes edu"
            width={104}
            height={84}
          />
        </Link>
        <Navigation
          isOpen={isOpen}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />

        <button
          className={classes.Hamburger}
          onClick={openMenu}
        >
          <span/>
          <span/>
          <span/>
        </button>
      </Wrapper>

    </header>
  )
}

export default Header