import Wrapper from '../Wrapper/Wrapper'
import classes from './HeadPage.module.scss'

interface HeadPageProps {
  img: {
    jpg: string
    webp?: string
  }
  title: string
  description: string
  posIsTop?: boolean
  imgPosition: string
}

function HeadPage({img, title, description, posIsTop = false, imgPosition = 'center'}: HeadPageProps) {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.HeadPage}>

        <picture>
          {img.webp && (
            <source
              type="image/webp"
              srcSet={img.webp}
            />
          )}
          <img
            className={classes.Img}
            style={{
              objectPosition: imgPosition
            }}
            src={img.jpg}
            alt={title}
          />
        </picture>
        <div className={classes.Info}>
          <Wrapper className={classes.InfoWrapper}>
            <h1 className={classes.Title}>{title}</h1>
            <p className={classes.Description}>{description}</p>
          </Wrapper>
        </div>
      </div>
    </div>
  )
}

export default HeadPage