import React from 'react'
import { motion } from 'framer-motion'
import classes from './GallerySlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper'
import { useSsr } from 'usehooks-ts'
import { breakpoints } from '@utils/constants/breakpoints'

interface GallerySliderProps {
  onShowGallery: (index: number) => void
  pictures: {
    title: string
    altText?: string
    img: {
      jpg: string
      webp?: string
    }
  }[]
}

function GallerySlider({pictures, onShowGallery}: GallerySliderProps) {
  const {isBrowser} = useSsr()

  const isMobile = isBrowser && (window.innerWidth <= breakpoints.mobileLarge)

  const paginationId = `gallery__slider-pagination`

  const imgVariants = {
    hidden: {
      opacity: isMobile ? 1 : 0,
      scale: isMobile ? 1 : 0.7,
      x: isMobile ? 0 : -20
    },
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: .5,
      }
    })
  }

  return (
    <Swiper
      className={classes.Slider}
      pagination={{
        enabled: true,
        clickable: true,
        el: `#${paginationId}`,
        bulletClass: classes.Bullet,
        bulletActiveClass: classes.BulletActive
      }}
      modules={[Pagination]}
      slidesPerView={2}
      spaceBetween={16}
      breakpoints={{
        1360: {
          slidesPerView: 4,
          spaceBetween: 48,
          pagination: false
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
          pagination: false
        },
        600: {
          slidesPerView: 3
        }
      }}
    >
      {pictures.map(({img, title, altText}, index) => (
        <SwiperSlide key={index} className={classes.Slide}>
          <picture>
            {img.webp && <source type="image/webp" srcSet={img.webp}/>}
            <motion.img
              initial="hidden"
              animate="animate"
              custom={index}
              variants={imgVariants}
              onClick={() => onShowGallery(index)}
              whileTap={{
                scale: .94,
                outlineColor: '#FB202A'
              }}
              title={altText}
              className={classes.Img}
              src={img.jpg}
              alt={title}
              width={160}
              height={112}
            />
          </picture>
        </SwiperSlide>
      ))}
      <div id={paginationId} className={classes.Pagination}/>
    </Swiper>
  )
}

export default GallerySlider