import classes from './MainSlider.module.scss'
import Wrapper from '../UI/Wrapper/Wrapper'
import Slider from 'react-slick'
import Button from '../UI/Button/Button'
import 'slick-carousel/slick/slick.css'
import clsx from 'clsx'
import { HandySvg } from 'handy-svg'
import { useRef } from 'react'
import HTMLReactParser from 'html-react-parser'
import { ISlide } from '../../models/ISlide'
import Image from 'next/image'

interface MainSliderProps {
  slides: ISlide[]
}

function MainSlider({slides}: MainSliderProps) {
  const modalRef = useRef<any>(null)
  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  
  }


  if (!slides) return null

  return (
    <section className={classes.Section}>
      <Wrapper className={classes.Wrapper}>
        <Slider
          ref={modalRef}
          className={classes.Slider}
          {...settings}
        >
          {slides.map(({button_link, button_text, description, img, title, id}) => (
            <div key={id} className={classes.Slide}>
              <div className={classes.Left}>
                <h3 className={classes.Title}>{HTMLReactParser(title)}</h3>
                <p className={classes.Description}>{description}</p>
                { 
                  button_text &&
                <Button
                  className={classes.Button}
                  typeButton="link"
                  href={button_link || '/'}
                  background="secondary"
                >
                  {button_text}
                </Button>

                }
               
              </div>
              <div className={classes.Img}>
                  <Image
                    src={img}
                    alt={title}
                    width={496}
                    height={604}
                    priority={true}
                  />
              </div>
            </div>
          ))}
        </Slider>
        <div className={classes.Footer}>
        {
            (slides.length > 1) &&
          <div className={classes.Navigation}>

            <button
              className={clsx(classes.PrevArrow)}
              onClick={() => {
                modalRef.current?.slickPrev()
              }}
              aria-label="Предыдущий слайд"
            >

              
              <HandySvg
                src="/assets/icons/arrow-left.svg"
                width={12}
                height={12}
              />
            </button>
            <button
              className={clsx(classes.NextArrow)}
              aria-label="Следующий слайд"
              onClick={() => {
                modalRef.current?.slickNext()
              }}
            >
              <HandySvg
                src="/assets/icons/arrow-right.svg"
                width={12}
                height={12}
              />
            </button>
          </div>
            }

        </div>
      </Wrapper>
    </section>
  )
}

export default MainSlider