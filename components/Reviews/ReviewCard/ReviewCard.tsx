import classes from './ReviewCard.module.scss'
import Image from 'next/image'
import { IReview } from '../../../models/IReview'
import HTMLReactParser from 'html-react-parser'

interface ReviewCardProps extends IReview {
  tagName?: 'li' | 'div'
}

function ReviewCard({id, text, author_name, author_job, author_img, tagName: Tag = 'li'}: ReviewCardProps) {
  return (
    <Tag className={classes.Item}>
      <p className={classes.Text}>
        {text}
      </p>
      <div className={classes.Bottom}>
        <Image
          className={classes.Avatar}
          src={author_img}
          alt={author_name}
          width={56}
          height={56}
        />
        <div className={classes.AuthorAndJob}>
          <p className={classes.Author} title={author_name}>{author_name}</p>
          {author_job && <p className={classes.Job}>{HTMLReactParser(author_job || '')}</p>}
        </div>
      </div>
    </Tag>
  )
}

export default ReviewCard