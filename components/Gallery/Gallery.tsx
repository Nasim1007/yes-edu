import Wrapper from '../../components/UI/Wrapper/Wrapper'
import classes from './Gallery.module.scss'
import H3 from '../UI/Typography/H3/H3'
import H2 from '../UI/Typography/H2/H2'
import { photos } from '../../data/photos'
import { IPicture } from '../../models/IPicture'

interface GalleryProps {
  photos: IPicture[]
}

function Gallery({photos}: GalleryProps) {

  if (!photos) return null

  return (
    <div className={classes.Gallery}>
      <Wrapper>
        <H3 tagName="h2">Галерея</H3>
        <H2 tagName="h3">Мы в фотографиях</H2>
        <ul className={classes.List}>
          {photos.map(({jpg, webp, title}, index) =>
            <li key={index} className={classes.Item}>
              <picture>
                {webp && <source type="image/webp" srcSet={webp}/>}
                <img className={classes.Img} src={jpg} alt={title || ''}/>
              </picture>
            </li>
          )}
        </ul>
      </Wrapper>
    </div>
  )
}

export default Gallery