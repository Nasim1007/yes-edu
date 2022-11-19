import Button from '../UI/Button/Button'
import Wrapper from '../UI/Wrapper/Wrapper'
import classes from './HelpCourse.module.scss'

export default function HelpCourse() {
  return (
    <Wrapper tagName="section" className={classes.Wrapper}>
      <div className={classes.Help}>
        <div className={classes.Left}>
          <h2 className={classes.Title}>Не знаете какой курс выбрать?</h2>
          <p className={classes.Text}>Ответьте на пару вопросов и мы подберём для вас лучший курс</p>
        </div>
        <div>
          <Button
            className={classes.Button}
            color="primary"
            background="transparent"
            border="primary"
            typeButton="link"
            href="tel:+992907005245"
          >
            Позвонить
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}