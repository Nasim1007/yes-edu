import classes from './ReviewsMobile.module.scss'
import { IReview } from '../../../models/IReview'
import Slider from 'react-slick'
import ReviewCard from '../ReviewCard/ReviewCard'
import "slick-carousel/slick/slick.css";

interface ReviewsMobileProps {
  reviewList: IReview[]
}

function ReviewsMobile({reviewList}: ReviewsMobileProps) {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    customPaging: () => (
      <div className={classes.Dot}/>
    ),
    responsive: [
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          variableWidth: true
        }
      },
      {
        breakpoint: 420,
        settings: {
          variableWidth: false,
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <Slider
      className={classes.Slider}
      {...settings}
    >
      {reviewList &&
      reviewList.map(review => (
        <div key={review.id} className={classes.Slide}>
          <ReviewCard
            tagName="div"
            {...review}
          />
        </div>
      ))}
    </Slider>
  )
}

export default ReviewsMobile