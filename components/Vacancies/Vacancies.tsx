import classes from './Vacancies.module.scss'
import Wrapper from '../UI/Wrapper/Wrapper'
import { IVacancy } from '../../models/IVacancy'
import VacancyCard from './VacancyCard/VacancyCard'

interface VacanciesProps {
  vacancyList: IVacancy[]
}

function Vacancies({vacancyList}: VacanciesProps) {

  if (!vacancyList) return null

  return (
    <section className={classes.Section}>
      <h2 className={classes.Title}>Вакансии</h2>
      <Wrapper className={classes.Wrapper}>
        <ul className={classes.List}>
          {vacancyList?.map(vacancy => (
            <VacancyCard
            key={vacancy.id}
              {...vacancy}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default Vacancies