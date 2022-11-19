import Vacancies from '../components/Vacancies/Vacancies'
import About from '../components/About/About'
import Reviews from '../components/Reviews/Reviews'
import HeadPage from '../components/UI/HeadPage/HeadPage'
import HelpCourse from '../components/HelpCourse/HelpCourse'
import HelpVacancy from '../components/HelpVacancy/HelpVacancy'
import { reviewList } from '../data/reviewList'
import ReviewClients from '../components/ReviewClients/ReviewClients'
import ReviewTeachers from '../components/ReviewTeachers/ReviewTeachers'
import { vacancyList } from '../data/vacancyList'
import { ISlide } from '../models/ISlide'
import { fetchSlides } from '../utils/requests/fetchSlides'
import { ICourse } from '../models/ICourse'
import { fetchCourses } from '../utils/requests/fetchCourses'
import { IPicture } from '../models/IPicture'
import { fetchGallery } from '../utils/requests/fetchGallery'
import { IReview } from '../models/IReview'
import { fetchReviewClients, fetchReviewTeachers } from '../utils/requests/fetchReviews'
import { IPartner } from '../models/IPartner'
import { fetchPartners } from '../utils/requests/fetchPartners'
import { IVacancy } from '../models/IVacancy'
import { fetchVacancies } from '../utils/requests/fetchVacancies'
import Head from 'next/head'


export async function getServerSideProps() {
  const reviews: IReview[] | null = await fetchReviewTeachers()
  const vacancies: IVacancy[] | null = await fetchVacancies()

  return {
    props: {
      vacancies,
      reviews,
    },
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
          jpg: '/assets/img/about.jpg',
          webp: '/assets/img/about.webp',
        }}
        title="Вакансии"
        description="Любишь преподавать? Найди свое место в нашей компании!"
      />
      <Vacancies vacancyList={vacancies}/>
      <HelpVacancy/>
      <About/>
      <ReviewTeachers reviews={reviews}/>
    </>
  )
}