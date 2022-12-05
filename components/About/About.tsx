import Button from '../UI/Button/Button'
import Wrapper from '../UI/Wrapper/Wrapper'
import classes from './About.module.scss'
import { useAppDispatch } from '../../store/hooks'
import { openLeadModal } from '../../store/reducers/leadSlice'

const About = () => {
  const dispatch = useAppDispatch()

  return (
    <Wrapper tagName="section" className={classes.Wrapper}>
      <div className={classes.About}>
        <div className={classes.Left}>
          <h2 className={classes.Title}>
            Образо&shy;ватель&shy;ный центр
            <span className={classes.Red}> Y</span>
            <span className={classes.Yellow}>E</span>
            <span className={classes.Blue}>S!</span>
          </h2>
          <Button
            className={classes.Button}
            background="secondary"
            onClick={() => dispatch(openLeadModal())}
          >
            Выбрать курс
          </Button>
        </div>
        <div className={classes.Right}>
          <p className={classes.Text}>ООО Арсаи Хает образовался в далеком 2009 году. Мы начали с одного кабинета и превратились в ведущий учебный центр с филиалами по городу Душанбе. За эти годы мы для вас собрали лучших учителей, разработали авторские методики преподавания и обучили более 8000 студентов. Мы разработали и внедрили систему управления обучением, чтобы вы за кратчайшие сроки освоили иностранные языки и свободно применяли в жизни. Наши выпускники успешно поступают в медицинские ВУЗы, уезжают учиться и работать в Россию, Европу и в Америку</p>
        </div>
      </div>
    </Wrapper>


  )
}
export default About