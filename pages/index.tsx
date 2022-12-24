import Head from 'next/head'
import About from '../components/About/About'
import Contacts from '../components/Contacts/Contacts'
import CoursesMain from '../components/CoursesMain/CoursesMain'
import Gallery from '../components/Gallery/Gallery'
import HelpCourse from '../components/HelpCourse/HelpCourse'
import MainSlider from '../components/MainSlider/MainSlider'
import AboutVideo from '../components/AboutVideo/AboutVideo'
import Instagram from '../components/Instagram/Instagram'
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
import { IPostInstagram } from '../models/IPost'
import { fetchPostsInstagram } from '../utils/requests/fetchPostsInstagram'

export async function getServerSideProps() {
  const mainSlides: ISlide[] | null = await fetchSlides()
  const courseList: ICourse[] | null = await fetchCourses(5)
  const gallery: IPicture[] | null = await fetchGallery()
  const reviews: IReview[] | null = await fetchReviewClients()
  // const partners: IPartner[] | null = await fetchPartners()
  const posts: IPostInstagram[] | null = await fetchPostsInstagram(8)

  return {
    props: {
      mainSlides,
      courseList,
      gallery,
      reviews,
      posts,
    },
  }
}

interface HomePageProps {
  mainSlides: ISlide[]
  courseList: ICourse[]
  gallery: IPicture[]
  reviews: IReview[]
  partners: IPartner[]
  posts: IPostInstagram[]
}

export default function HomePage({mainSlides, courseList, gallery, reviews, posts}: HomePageProps) {
console.log(posts);

  return (
    <>
      <Head>
        <title>Yes Edu - Образовательный центр</title>
        <meta name="description" content="Образовательный центр YESedu , это центр где используется  инновационная методика  которая даёт настоящий результат, что на шаг приближает к мечте."></meta>
        <meta name="keywords" content="Образовательный центр, 
Изучения языков, 
Быстрое изучение английского в Таджикистане, 
Быстрое изучение русского в Душанбе, 
Обучение, 
Выучить русский в Душанбе, 
Изучение языков в Душанбе,
Образовательный центр в Душанбе"/>
      </Head>
      <MainSlider slides={mainSlides}/>
      <CoursesMain courseList={courseList}/>
      <HelpCourse/>
      <Gallery photos={gallery}/>
      <About/>
      <AboutVideo/>
      <Contacts/>
      <ReviewClients reviews={reviews}/>
      <Instagram posts={posts}/>
    </>
  )
}