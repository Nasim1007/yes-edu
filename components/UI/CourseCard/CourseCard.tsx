import classes from './CourseCard.module.scss'
import { ICourse } from '../../../models/ICourse'
import { HandySvg } from 'handy-svg'
import clsx from 'clsx'
import { useAppDispatch } from '../../../store/hooks'
import { openLeadModal } from '../../../store/reducers/leadSlice'

interface CourseCardProps extends ICourse {
  className?: string
}

function CourseCard({name, id, icon, className}: CourseCardProps) {
  const dispatch = useAppDispatch()

  return (
    <article
      className={clsx(classes.Card, className)}
      tabIndex={0}
      onClick={() => dispatch(openLeadModal(id))}
    >
      <h3 className={classes.Name} title={name}>{name}</h3>
      {icon.lastIndexOf('.png') !== -1 ? (
        <img
          className={classes.Icon}
          src={icon}
          width={28}
          height={28}
        />
      ) : (
        <HandySvg
          className={classes.Icon}
          src={icon}
          width={28}
          height={28}
        />
      )}
      <span className={classes.Action}>Записаться</span>
    </article>
  )
}

export default CourseCard