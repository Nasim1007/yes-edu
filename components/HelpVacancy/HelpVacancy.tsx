import Button from '../UI/Button/Button'
import Wrapper from '../UI/Wrapper/Wrapper'
import classes from './HelpVacancy.module.scss'

export default function HelpVacancy() {
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
          >
            Отправить резюме
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}