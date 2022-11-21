import classes from './VacancyCard.module.scss'
import { IVacancy } from '../../../models/IVacancy'
import Button from '../../UI/Button/Button'
import { useAppDispatch } from '../../../store/hooks'
import { openVacanModal } from '../../../store/reducers/leadSlice'

interface VacancyCardProps extends IVacancy {

}

function VacancyCard({ salary, experience, name, id, schedule }: VacancyCardProps) {
  const dispatch = useAppDispatch()
  return (
    <li className={classes.Card}>
      <h3 className={classes.Title}>{name}</h3>

      <dl className={classes.List}>
        <div className={classes.Item}>
          <dt className={classes.Name}>Опыт</dt>
          <dd className={classes.Value}>{experience}</dd>
        </div>
        <div className={classes.Item}>
          <dt className={classes.Name}>График работы</dt>
          <dd className={classes.Value}>{schedule}</dd>
        </div>
        <div className={classes.Item}>
          <dt className={classes.Name}>Зарплата</dt>
          <dd className={classes.Value}>{salary}</dd>
        </div>
      </dl>
      <Button
        border="primary"
        background="transparent"
        color="primary"
        className={classes.Button}
        onClick={() => dispatch(openVacanModal(id))}
      >
        Откликнуться
      </Button>
    </li>
  )
}

export default VacancyCard