import classes from "./GalleryModal.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IPicture } from "../../../models/IPicture";
import { CSSTransition } from "react-transition-group";
import { HandySvg } from "handy-svg";
import { useSwiper } from 'swiper/react';
import {Navigation} from "swiper"
import Image from "next/image";

interface GalleryProps {
  photos: IPicture[];
  showPicture: boolean;
  setShowPicture: any;
  activeIndex: number | string;
}
export const GalleryModal = ({
  photos,
  showPicture,
  setShowPicture,
  activeIndex,
}: GalleryProps) => {
  const prevId = `gallery__nav-prev--${Math.floor(Math.random() * 100)}`
  const nextId = `gallery__nav-next--${Math.floor(Math.random() * 100)}`

  const swiper = useSwiper();

  return (
    <CSSTransition
      timeout={500}
      in={showPicture}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: classes.EnterActive,
        exitActive: classes.ExitActive,
      }}
    >
 <>
 <div
        className={classes.GalleryModal}
        onClick={() => setShowPicture(!showPicture)}
      >
        <Swiper
          spaceBetween={50}
          modules={[Navigation]}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className={classes.BlogSwiper}
          initialSlide={+activeIndex}
          navigation={{
            prevEl: `#${prevId}`,
            nextEl: `#${nextId}`,
            enabled: true
          }}
          
        >
          {photos.map(({ img, title }, index) => (

            <SwiperSlide virtualIndex={index} className={classes.Slide}>
              <div
                className={classes.Img}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <Image width={1100} height={755} src={img} alt={title || ""} />
                
            
              </div>
            
            </SwiperSlide>
          ))}
            <div
          slot="container-start"
          className={classes.Navigation}>
          <button
            id={prevId}
            onClick={(event) => event.stopPropagation()}

            className={classes.Prev}>
               <HandySvg
           className={classes.Icon}
           src="/assets/icons/Chevron_Left_XL.svg"
           />
          </button>
          <button
            id={nextId}
            onClick={(event) => event.stopPropagation()}

            className={classes.Next}
          >
           <HandySvg
           className={classes.Icon}
           src="/assets/icons/Chevron_Right_XL.svg"
           />
          </button>
        </div>
           
        </Swiper>
        <button
                  className={classes.Close}
                  onClick={() => setShowPicture(false)}
                >
                  <HandySvg
                    src={"/assets/icons/close.svg"}
                    width={30}
                    height={30}
                  />
                  {/* x */}
                </button>
      </div>

 </>
    </CSSTransition>
  );
};
