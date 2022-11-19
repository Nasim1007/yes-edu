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
          <p className={classes.Text}>Вот вам яркий пример современных тенденций — экономическая повестка сегодняшнего дня позволяет выполнить
            важные задания по разработке переосмысления внешнеэкономических политик. Как уже неоднократно упомянуто,
            действия представителей оппозиции и по сей день остаются уделом либералов, которые жаждут быть подвергнуты
            целой серии независимых исследований. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики
            выводы могут быть заблокированы в рамках своих собственных рациональных ограничений.</p>
        </div>
      </div>
    </Wrapper>


  )
}
export default About