import Vacancies from '../components/Vacancies/Vacancies'
import About from '../components/About/About'
import HeadPage from '../components/UI/HeadPage/HeadPage'
import HelpVacancy from '../components/HelpVacancy/HelpVacancy'
import ReviewTeachers from '../components/ReviewTeachers/ReviewTeachers'
import { IReview } from '../models/IReview'
import { fetchReviewTeachers } from '../utils/requests/fetchReviews'
import { IVacancy } from '../models/IVacancy'
import { fetchVacancies } from '../utils/requests/fetchVacancies'
import Head from 'next/head'
import Advantages from '../components/Vacancies/Adventages/Advantages'


export async function getServerSideProps() {
  const reviews: IReview[] | null = await fetchReviewTeachers()
  const vacancies: IVacancy[] | null = await fetchVacancies()

  return {
    props: {
      vacancies,
      reviews
    }
  }
}

interface VacanciesPageProps {
  reviews: IReview[]
  vacancies: IVacancy[]
}

export default function VacanciesPage({vacancies, reviews}: VacanciesPageProps) {

  return (
    <>
      <Head>
        <title>Вакансии - Образовательный центр</title>
        <meta name="description" content="Вакансии"/>
      </Head>
      <HeadPage
        img={{
          jpg: '/assets/img/gallery5.jpg',
          webp: '/assets/img/gallery5.webp',
        }}
        title="Вакансии"
        description="Любишь преподавать? Найди свое место в нашей компании!"
      />
      <Vacancies vacancyList={vacancies}/>
      <HelpVacancy/>
      <About/>
      <Advantages/>
      <ReviewTeachers reviews={reviews}/>
    </>
  )
}