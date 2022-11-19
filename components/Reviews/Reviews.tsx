import classes from './Reviews.module.scss'
import { IReview } from '../../models/IReview'
import { useWindowSize } from 'usehooks-ts'
import ReviewsMobile from './ReviewsMobile/ReviewsMobile'
import ReviewCard from './ReviewCard/ReviewCard'

interface ReviewsProps {
  reviews: IReview[]
}

export default function Reviews({reviews}: ReviewsProps) {
  const {width} = useWindowSize()
  // if (width <= 640) return

  return (
    <>
      <ReviewsMobile reviewList={reviews}/>
      <ul className={classes.List}>
        {reviews.map(({id, text, author}) => (
          <ReviewCard key={id} id={id} author={author} text={text}/>
        ))}
      </ul>
    </>
  )
}