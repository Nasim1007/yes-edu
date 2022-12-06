import React from 'react'
import { motion } from 'framer-motion'
import classes from './GalleryPictures.module.scss'
import { IGallery } from '@ui/Gallery/interfaces'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import PrevIcon from '@assets/icons/prev-gallery.svg'
import NextIcon from '@assets/icons/next-gallery.svg'
import { Navigation } from 'swiper'
import { useSsr } from 'usehooks-ts'
import { breakpoints } from '@utils/constants/breakpoints'

interface GalleryPicturesProps extends IGallery {
  onClose: () => void
  activeIndex: number
}

function GalleryPictures({pictures, onClose, activeIndex}: GalleryPicturesProps) {

  const prevId = `gallery__nav-prev--${Math.floor(Math.random() * 100)}`
  const nextId = `gallery__nav-next--${Math.floor(Math.random() * 100)}`

  const {isBrowser} = useSsr()

  const isMobile = isBrowser && (window.innerWidth <= breakpoints.mobileLarge)

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0,
        transition: {
          delay: .2
        }
      }}
      className={classes.Wrapper}
      onClick={onClose}
    >
      <Swiper
        className={classes.Slider}
        modules={[Navigation]}
        slidesPerView={1}
        navigation={{
          prevEl: `#${prevId}`,
          nextEl: `#${nextId}`,
          enabled: true
        }}
        pagination={false}
        initialSlide={activeIndex}
      >
        {pictures.map(({picture, title}) => (
          <SwiperSlide
            key={title}
            className={classes.Slide}
          >
            <picture
              style={{
                display: 'inline-block'
              }}
            >
              {picture.webp && <source type="image/webp" srcSet={picture.webp}/>}
              <motion.img
                initial={{
                  scale: isMobile ? 1 : .5,
                  opacity: 0
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: isMobile ? .1 : .2,
                  }
                }}
                exit={{
                  scale: isMobile ? 1 : .5,
                  opacity: 0
                }}
                transition={{
                  duration: .1,
                  ease: 'linear'
                }}
                onClick={(event) => {
                  event.stopPropagation()
                }}
                className={classes.Picture}
                src={picture.jpg}
                alt={title}
                width={picture.width}
                height={picture.height}
              />
            </picture>
          </SwiperSlide>
        ))}
        <span slot="container-end">
          <button
            onClick={onClose}
            className={classes.Close}
          >
            Закрыть
          </button>
        </span>
        <div
          slot="container-start"
          className={classes.Navigation}>
          <button
            id={prevId}
            onClick={(event) => event.stopPropagation()}
            className={classes.Prev}>
            <PrevIcon/>
          </button>
          <button
            id={nextId}
            onClick={(event) => event.stopPropagation()}
            className={classes.Next}
          >
            <NextIcon/>
          </button>
        </div>
      </Swiper>

    </motion.div>
  )
}

export default GalleryPictures