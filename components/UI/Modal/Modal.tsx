import classes from './Modal.module.scss'
import { ReactNode } from 'react'
import { Transition } from 'react-transition-group'
import { useLockedBody, useWindowSize } from 'usehooks-ts'
import { HandySvg } from 'handy-svg'
import clsx from 'clsx'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  onDidUnmount?: () => void
  className?: string
}

function Modal({children, isOpen, onClose, onDidUnmount, className}: ModalProps) {
  const isMobile = (typeof window !== 'undefined') && (window.innerWidth <= 480)

  const duration = 400

  const defaultStyleContent = {
    transition: `all ${duration}ms ease-in-out`,
    transform: `translate3d(${isMobile ? 'auto' : '-50%'}, ${isMobile ? '100%' : '-100%'}, 0)`
  }

  const transitionContent: any = {
    entering: {
      transform: `translate3d(${isMobile ? '0' : '-50%'}, ${isMobile ? '0' : '-50%'}, 0)`,
      top: isMobile ? 'auto' : '50%'
    },
    entered: {
      transform: `translate3d(${isMobile ? '0' : '-50%'}, ${isMobile ? '0' : '-50%'}, 0)`,
      top: isMobile ? 'auto' : '50%'
    },
    exiting: {
      transform: `translate3d(${isMobile ? '0' : '-50%'}, ${isMobile ? '100%' : '-100%'}, 0)`,
      top: isMobile ? 'auto' : '0'
    },
    exited: {
      transform: `translate3d(${isMobile ? '0' : '-50%'}, ${isMobile ? '100%' : '-100%'}, 0)`,
      top: isMobile ? 'auto' : '0'
    },
  }

  if (isOpen) {
    useLockedBody()
  }

  const transitionBackdrop: any = {
    entering: {
      filter: 'opacity(1)'
    },
    entered: {
      filter: 'opacity(1)'
    },
    exiting: {
      filter: 'opacity(0)'
    },
    exited: {
      filter: 'opacity(0)'
    },
  }

  return (
    <Transition
      in={isOpen}
      timeout={duration}
      mountOnEnter
      unmountOnExit
      onExited={onDidUnmount}
    >
      {state => (
        <div className={classes.Modal}>
          <div
            style={{
              ...defaultStyleContent,
              ...transitionContent[state]
            }}
            className={clsx(classes.Content, className)}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Закрыть модальную окно"
              className={classes.Close}
            >
              <HandySvg
                src="/assets/icons/close.svg"
                width={24}
                height={24}
              />
            </button>
            {children}
          </div>
          <div
            style={{
              filter: 'opacity(0)',
              transition: `filter ${duration}ms`,
              ...transitionBackdrop[state]
            }}
            className={classes.Backdrop}
            onClick={onClose}
          />
        </div>
      )}
    </Transition>
  )
}

export default Modal