import classes from './CoursesMain.module.scss'
import Wrapper from '../UI/Wrapper/Wrapper'
import Grid from '../UI/Grid/Grid'
import CourseCard from '../UI/CourseCard/CourseCard'
import { ICourse } from '../../models/ICourse'
import H2 from '../UI/Typography/H2/H2'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface CoursesMainProps {
  courseList: ICourse[]
}

function CoursesMain({courseList}: CoursesMainProps) {
  if (!courseList) {
    return null
  }
  // const router = useRouter()

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   router.push('/courses')
  // }



  return (
    <section className={classes.Courses}>
      <Wrapper className={classes.Wrapper}>
        <H2 className={classes.Title}>Наши курсы</H2>
        <Grid className={classes.List}>
          {courseList?.slice(0, 6).map(course => (
            <CourseCard
              key={course.id}
              className={classes.Card}
              {...course}
            />
          ))}
           {/* <Link href="/courses" className={clsx(classes.Link, classes.Facebook)}> */}
          <CourseCard
              key="55"
              className={clsx(classes.Card, classes.AllCourses)}
              name="Все курсы"
              icon="/assets/icons/webinar.png"
              link
            />
            {/* </Link> */}
        </Grid>
      </Wrapper>
    </section>
  )
}

export default CoursesMain