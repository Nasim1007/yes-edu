import Wrapper from '../../components/UI/Wrapper/Wrapper'
import classes from './Gallery.module.scss'
import H3 from '../UI/Typography/H3/H3'
import H2 from '../UI/Typography/H2/H2'
import { IPicture } from '../../models/IPicture'
import { useState } from 'react'
import { GalleryModal } from './GallerryModal/GalleryModal'
import Image from 'next/image'

interface GalleryProps {
  photos: IPicture[]

}

function Gallery({photos}: GalleryProps) {
  const [showPicture, setShowPicture ] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const handle = (id: any) => {
    setShowPicture(!showPicture)
    setActiveIndex(id)
  } 

  if (!photos) return null

  return (
    <div className={classes.Gallery}>
      <Wrapper>
        <H3 tagName="h2">Галерея</H3>
        <H2 tagName="h3">Мы в фотографиях</H2>
        <ul className={classes.List}>
        
            <GalleryModal photos={photos} showPicture={showPicture} setShowPicture={setShowPicture} activeIndex={activeIndex}/>
      

           {photos.map(({img, title, id}, index) =>
            <li key={index} className={classes.Item}>
              <picture >
                <Image onClick={() => handle(index)} 
                className={classes.Img} 
                src={img} 
                width={300} 
                height={300} 
                alt={title || ''}/>
              </picture>
            </li>
          )}
        </ul>
      </Wrapper>
    </div>
  )
}

export default Gallery