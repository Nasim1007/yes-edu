import Hidden from '@ui/Hidden/Hidden'
import CloseIcon from '@assets/icons/close.svg'
import classes from './ModalClose.module.scss'

interface ModalCloseProps {
  onClose?: () => void
  className?: string
}

function ModalClose({onClose, className}: ModalCloseProps) {
  return (
    <button className={`${classes.Button} ${className || ''}`} onClick={onClose}>
      <Hidden>Закрыть модальное окно</Hidden>
      <CloseIcon
        width={11}
        height={11}
        className={classes.Icon}
      />
    </button>
  )
}

export default ModalClose