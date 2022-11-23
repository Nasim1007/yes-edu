import classes from './ReviewClients.module.scss'
import Wrapper from '../UI/Wrapper/Wrapper'
import H3 from '../UI/Typography/H3/H3'
import H2 from '../UI/Typography/H2/H2'
import Reviews from '../Reviews/Reviews'
import { IReview } from '../../models/IReview'

interface ReviewClientsProps {
  reviews: IReview[]
}

function ReviewClients({reviews}: ReviewClientsProps) {

  if (!reviews) return null

  return (
    <section className={classes.Section}>
      <Wrapper>
        <H3 tagName="h2" className={classes.Title}>Отзывы</H3>
        <H2 tagName="h3" className={classes.Subtitle}>Отзывы от наших учащихся</H2>
        <Reviews reviews={reviews}/>
      </Wrapper>
    </section>
  )
}

export default ReviewClients