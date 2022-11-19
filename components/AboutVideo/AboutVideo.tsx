import classes from './AboutVideo.module.scss'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import Wrapper from '../UI/Wrapper/Wrapper'

function AboutVideo() {
  return (
    <Wrapper className={classes.Wrapper}>
      {/*<div className={classes.VideoWraoo}>*/}
      <LiteYouTubeEmbed
        wrapperClass={`${classes.Video} yt-lite`}
        id="mg5r4_yjGNY"
        title="Yes edu"
        noCookie={true}
        playerClass={classes.PlayBtn}
        poster="maxresdefault"
        webp={true}
      />
      {/*</div>*/}
    </Wrapper>
  )
}

export default AboutVideo