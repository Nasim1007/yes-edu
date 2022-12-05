import classes from './CourseCard.module.scss'
import { ICourse } from '../../../models/ICourse'
import { HandySvg } from 'handy-svg'
import clsx from 'clsx'
import { useAppDispatch } from '../../../store/hooks'
import { openLeadModal } from '../../../store/reducers/leadSlice'
import { useRouter } from 'next/router'

interface CourseCardProps extends ICourse {
  className?: string
}

function CourseCard({name, id, icon, className, info, student, link}: CourseCardProps) {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/courses')
  }

  return (
    <article
      className={clsx(classes.Card, className)}
      tabIndex={0}
      onClick={link ? handleClick : () => dispatch(openLeadModal(id))}
    >
      <h3 className={classes.Name} title={name}>{name}</h3>
      <div className={classes.Info}>
      { info && <h4>В программу входят: {info}</h4>}
      { student && <h4>{student}</h4>}
      </div>
      <img
          className={classes.Icon}
          src={icon}
          width={28}
          height={28}
        />
      <span className={classes.Action}>Записаться</span>
    </article>
  )
}

export default CourseCard