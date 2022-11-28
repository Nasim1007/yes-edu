import classes from './Courses.module.scss'
import Wrapper from '../UI/Wrapper/Wrapper'
import Tabs from '../UI/Tabs/Tabs'
import TabContent from '../UI/Tabs/TabContent/TabContent'
import CourseCard from '../UI/CourseCard/CourseCard'
import Grid from '../UI/Grid/Grid'
import { ICourse } from '../../models/ICourse'

interface CoursesProps {
  courseList: ICourse[]
}

function Courses({courseList}: CoursesProps) {


  if (!courseList) return null

  // @ts-ignore
  const courseTypes = ['Все курсы', ...new Set(courseList.map(course => course.type))]
  
  return (
    <section className={classes.Section}>
      <Wrapper>
        <Tabs
          classNames={{
            header: classes.Header
          }}
        >
          {courseTypes?.map((type, index) => (
            <TabContent key={index} id={index} title={type}>
              <Grid className={classes.List}>
                {courseList
                  .filter(course => {
                    if (type === 'Все курсы') return true
                    return course.type === type
                  })
                  .map((course) => (
                  <CourseCard
                    key={course.id}
                    className={classes.Card}
                    {...course}
                  />
                ))}
              </Grid>
            </TabContent>
          ))}
        </Tabs>
      </Wrapper>
    </section>
  )
}

export default Courses