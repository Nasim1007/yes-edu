import classes from "./GalleryModal.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { IPicture } from "../../../models/IPicture";
import { CSSTransition } from "react-transition-group";
import { HandySvg } from "handy-svg";

interface GalleryProps {
    photos: IPicture[]
    showPicture: boolean
    setShowPicture: any
    activeIndex: number | string
  }
export const GalleryModal = ({photos, showPicture, setShowPicture, activeIndex}: GalleryProps) => {

  return (
<CSSTransition
    timeout={500}
    in={showPicture}
    mountOnEnter
    unmountOnExit
    classNames={{
        enterActive: classes.EnterActive,
        exitActive: classes.ExitActive
    }}
>
    <div className={classes.GalleryModal} onClick={() => setShowPicture(!showPicture)}>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className={classes.BlogSwiper}
      initialSlide={+activeIndex}
      
    >
        {
            photos.map(({img, title}, index) => <SwiperSlide  virtualIndex={index}>
                <div className={classes.Img}
                    onClick={(event) => {
                        event.preventDefault()
                        event.stopPropagation()
                    }}
                >
                <img src={img} alt={title || ""} />
                <button 
                className={classes.Close}
                onClick={() => setShowPicture(false)}
                >
                <HandySvg
                src={"/assets/icons/close.svg"}
                width={16}
                height={16}
                />
                </button>
                </div>
                
            </SwiperSlide>)
        }
    </Swiper>
    </div>
    </CSSTransition>

  )
}
