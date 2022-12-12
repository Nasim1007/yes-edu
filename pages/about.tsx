import About from '../components/About/About'
import Contacts from '../components/Contacts/Contacts'
import Gallery from '../components/Gallery/Gallery'
import HeadPage from '../components/UI/HeadPage/HeadPage'
import ReviewClients from '../components/ReviewClients/ReviewClients'
import Partners from '../components/Partners/Partners'
import { IPicture } from '../models/IPicture'
import { fetchGallery } from '../utils/requests/fetchGallery'
import { IReview } from '../models/IReview'
import { fetchReviewClients } from '../utils/requests/fetchReviews'
import { IPartner } from '../models/IPartner'
import { fetchPartners } from '../utils/requests/fetchPartners'
import Head from 'next/head'
import AboutVideo from '../components/AboutVideo/AboutVideo'


export async function getServerSideProps() {
  const gallery: IPicture[] | null = await fetchGallery()
  const reviews: IReview[] | null = await fetchReviewClients()
  const partners: IPartner[] | null = await fetchPartners()

  return {
    props: {
      gallery,
      reviews
    },
  }
}

interface AboutPageProps {
  gallery: IPicture[]
  reviews: IReview[]
  partners: IPartner[]
}

export default function AboutPage({reviews, partners, gallery}: AboutPageProps) {
  return (
    <>
      <Head>
        <title>О нас - Образовательный центр</title>
        <meta name="description" content="О нас"/>
      </Head>
      <HeadPage
        img={{
          jpg: '/assets/img/aboutus.jpg',
          // webp: '/assets/img/about.webp',
        }}
        title="О нас"
        description="Почему выбирают нас? Обучаем с 2009 года. Грамотные и строгие учителя."
      />
      <Contacts/>
      <About/>
      <AboutVideo/>
      <Gallery photos={gallery}/>
      <ReviewClients reviews={reviews}/>
    </>
  )
}