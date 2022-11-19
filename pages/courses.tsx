import Courses from '../components/Courses/Courses'
import HeadPage from '../components/UI/HeadPage/HeadPage'
import ReviewClients from '../components/ReviewClients/ReviewClients'
import HelpCourse from '../components/HelpCourse/HelpCourse'
import { ISlide } from '../models/ISlide'
import { ICourse } from '../models/ICourse'
import { fetchCourses } from '../utils/requests/fetchCourses'
import { IPicture } from '../models/IPicture'
import { IReview } from '../models/IReview'
import { fetchReviewClients } from '../utils/requests/fetchReviews'
import { IPartner } from '../models/IPartner'
import Head from 'next/head'

export async function getServerSideProps() {
  const courseList: ICourse[] | null = await fetchCourses()
  const reviews: IReview[] | null = await fetchReviewClients()

  return {
    props: {
      courseList,
      reviews,
    },
  }
}

interface CoursesPageProps {
  mainSlides: ISlide[]
  courseList: ICourse[]
  gallery: IPicture[]
  reviews: IReview[]
  partners: IPartner[]
}

export default function CoursesPage({courseList, reviews}: CoursesPageProps) {
  return (
    <>
      <Head>
        <title>Наши курсы - Образовательный центр</title>
        <meta name="description" content="Наши курсы"/>
      </Head>
      <HeadPage
        img={{
          jpg: '/assets/img/about.jpg',
          webp: '/assets/img/about.webp',
        }}
        title="Наши курсы"
        description="Любишь преподавать? Найди свое место в нашей компании!"
      />
      <Courses courseList={courseList}/>
      <HelpCourse/>
      <ReviewClients reviews={reviews}/>
    </>
  )
} 