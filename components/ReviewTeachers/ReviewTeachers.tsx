import classes from './ReviewTeachers.module.scss'
import Wrapper from '../UI/Wrapper/Wrapper'
import H3 from '../UI/Typography/H3/H3'
import H2 from '../UI/Typography/H2/H2'
import Reviews from '../Reviews/Reviews'
import { IReview } from '../../models/IReview'

interface ReviewTeachersProps {
  reviews: IReview[]
}

function ReviewTeachers({reviews}: ReviewTeachersProps) {
  return (
    <section className={classes.Section}>
      <Wrapper>
        <H3 tagName="h2" className={classes.Title}>Отзывы</H3>
        <H2 tagName="h3" className={classes.Subtitle}>Отзывы учителей</H2>
        <Reviews reviews={reviews}/>
      </Wrapper>
    </section>
  )
}

export default ReviewTeachers