import Button from '../UI/Button/Button'
import Wrapper from '../UI/Wrapper/Wrapper'
import classes from './HelpVacancy.module.scss'
import { useAppDispatch } from '../../store/hooks'
import { openResume } from '../../store/reducers/leadSlice'


export default function HelpVacancy() {
  const dispatch = useAppDispatch()
  return (
    <Wrapper tagName="section" className={classes.Wrapper}>
      <div className={classes.Help}>
        <div className={classes.Left}>
          <h2 className={classes.Title}>Нет подходящей вакансии?</h2>
          <p className={classes.Text}>Оставьте ваши контакты и мы найдем подходящую для вас работу</p>
        </div>
        <div>
          <Button
            className={classes.Button}
            color="primary"
            background="transparent"
            border="primary"
            onClick={() => dispatch(openResume())}
          >
            Отправить резюме
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}