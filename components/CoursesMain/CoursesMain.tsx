import classes from './CoursesMain.module.scss'
import Wrapper from '../UI/Wrapper/Wrapper'
import Grid from '../UI/Grid/Grid'
import CourseCard from '../UI/CourseCard/CourseCard'
import { ICourse } from '../../models/ICourse'
import H2 from '../UI/Typography/H2/H2'

interface CoursesMainProps {
  courseList: ICourse[]
}

function CoursesMain({courseList}: CoursesMainProps) {

  if (!courseList) {
    return null
  }

  return (
    <section className={classes.Courses}>
      <Wrapper className={classes.Wrapper}>
        <H2 className={classes.Title}>Наши курсы</H2>
        <Grid className={classes.List}>
          {courseList.slice(0, 6).map(course => (
            <CourseCard
              key={course.id}
              className={classes.Card}
              {...course}
            />
          ))}
        </Grid>
      </Wrapper>
    </section>
  )
}

export default CoursesMain