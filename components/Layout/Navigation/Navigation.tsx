import classes from './Navigation.module.scss'
import Link from 'next/link'
import { HandySvg } from 'handy-svg'
import { Transition } from 'react-transition-group'
import { useLockedBody, useWindowSize } from 'usehooks-ts'
import Button from '../../UI/Button/Button'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { openLeadModal } from '../../../store/reducers/leadSlice'
import { useAppDispatch } from '../../../hooks'

interface NavigationProps {
  isOpen: boolean
  openMenu: () => void
  closeMenu: () => void
}

function Navigation({isOpen, closeMenu}: NavigationProps) {
  const {pathname} = useRouter()
  const {width} = useWindowSize()
  const dispatch = useAppDispatch()

  const menuList = [
    {name: 'Наши курсы', link: 'courses'},
    {name: 'О нас', link: 'about'},
    {name: 'Вакансии', link: 'vacancies'},
  ]

  const defaultStyleBackdrop = {
    opacity: 0,
    transition: 'opacity 250ms'
  }

  const transitionBackdrop: any = {
    entering: {opacity: 1},
    entered: {opacity: 1},
    exiting: {opacity: 0},
    exited: {opacity: 0},
  }

  const defaultStyle = {
    transform: `translate3d(0, -100%, 0)`,
    transition: `transform, 250ms`
  }

  const transitions: any = {
    entering: {transform: `translate3d(0, 0, 0)`,},
    entered: {transform: `translate3d(0, 0, 0)`,},
    exiting: {
      transform: width <= 480 ? `translate3d(0, -100%, 0)` : 'none',
    },
    exited: {
      transform: width <= 480 ? `translate3d(0, -100%, 0)` : 'none',
    },
  }

  useLockedBody(isOpen)

  return (
    <>
      <Transition
        in={isOpen}
        timeout={250}
      >
        {state => (
          <nav
            className={classes.Navigation}
            style={{
              ...defaultStyle,
              ...transitions[state]
            }}
          >
            <div className={classes.Header}>
              <Link href="/" className={classes.Logo}>
                <img
                  src="/assets/img/logo.png"
                  alt="Yes edu"
                  width={80}
                  height={64}
                />
              </Link>
              <button
                className={classes.Close}
                onClick={closeMenu}
                aria-label="Закрыть меню"
              >
                <HandySvg
                  src="/assets/icons/close.svg"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <ul className={classes.List}>
              {menuList.map(({link, name}) => (
                <li key={name} className={classes.Item}>
                  <Link
                    href={link}
                    className={clsx(classes.Link, (pathname !== '/') && classes.OtherPage)}
                    onClick={closeMenu}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className={classes.Buttons}>
              <Button
                typeButton="link"
                href="tel:+992907005245"
                background="transparent"
                color={pathname !== '/' ? 'white' : 'black'}
                className={classes.CallButton}
              >
                <HandySvg
                  src="/assets/icons/telephone.svg"
                  width={16}
                  height={16}
                />
                Позвонить
              </Button>

              <Button
                className={classes.ToActionButton}
                onClick={() => {
                  dispatch(openLeadModal())
                  closeMenu()
                }}
              >
                <HandySvg
                  src="/assets/icons/note-edit.svg"
                  width={16}
                  height={16}
                />
                Записаться
              </Button>
            </div>
          </nav>
        )}
      </Transition>
      <Transition
        in={isOpen}
        timeout={250}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <div
            style={{
              ...defaultStyleBackdrop,
              ...transitionBackdrop[state]
            }}
            onClick={closeMenu}
            className={classes.Backdrop}
          />
        )}
      </Transition>
    </>
  )
}

export default Navigation