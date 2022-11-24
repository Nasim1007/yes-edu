import classes from './ReviewCard.module.scss'
import Image from 'next/image'
import { IReview } from '../../../models/IReview'

interface ReviewCardProps extends IReview {
  tagName?: 'li' | 'div'
}

function ReviewCard({id, text, author, tagName: Tag = 'li'}: ReviewCardProps) {
  return (
    <Tag className={classes.Item}>
      <p className={classes.Text}>
        {text}
      </p>
      <div className={classes.Bottom}>
        <Image
          className={classes.Avatar}
          src={author.avatar}
          alt={author.name}
          width={56}
          height={56}
        />
        <div className={classes.AuthorAndJob}>
          <p className={classes.Author} title={author.name}>{author.name}</p>
          <p className={classes.Job}>{author.job}</p>
        </div>
      </div>
    </Tag>
  )
}

export default ReviewCard