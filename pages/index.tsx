import Head from 'next/head'
import About from '../components/About/About'
import Contacts from '../components/Contacts/Contacts'
import CoursesMain from '../components/CoursesMain/CoursesMain'
import Gallery from '../components/Gallery/Gallery'
import HelpCourse from '../components/HelpCourse/HelpCourse'
import MainSlider from '../components/MainSlider/MainSlider'
import AboutVideo from '../components/AboutVideo/AboutVideo'
import ReviewClients from '../components/ReviewClients/ReviewClients'
import { ISlide } from '../models/ISlide'
import { ICourse } from '../models/ICourse'
import { IPicture } from '../models/IPicture'
import { IReview } from '../models/IReview'
import { IPartner } from '../models/IPartner'
import { fetchSlides } from '../utils/requests/fetchSlides'
import { fetchCourses } from '../utils/requests/fetchCourses'
import { fetchGallery } from '../utils/requests/fetchGallery'
import { fetchReviewClients } from '../utils/requests/fetchReviews'
import { fetchPartners } from '../utils/requests/fetchPartners'

export async function getServerSideProps() {
  const mainSlides: ISlide[] | null = await fetchSlides()
  const courseList: ICourse[] | null = await fetchCourses(6)
  const gallery: IPicture[] | null = await fetchGallery()
  const reviews: IReview[] | null = await fetchReviewClients()
  const partners: IPartner[] | null = await fetchPartners()

  return {
    props: {
      mainSlides,
      courseList,
      gallery,
      reviews
    },
  }
}

interface HomePageProps {
  mainSlides: ISlide[]
  courseList: ICourse[]
  gallery: IPicture[]
  reviews: IReview[]
  partners: IPartner[]
}

export default function HomePage({mainSlides, courseList, gallery, reviews, partners}: HomePageProps) {

  return (
    <>
      <Head>
        <title>Yes Edu - Образовательный центр</title>
        <meta name="description" content="Описание"/>
      </Head>
      <MainSlider slides={mainSlides}/>
      <CoursesMain courseList={courseList}/>
      <HelpCourse/>
      <Gallery photos={gallery}/>
      <About/>
      <AboutVideo/>
      <Contacts/>
      <ReviewClients reviews={reviews}/>
    </>
  )
}