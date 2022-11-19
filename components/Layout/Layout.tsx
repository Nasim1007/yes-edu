import classes from './Layout.module.scss'
import { ReactNode, useEffect, useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ModalCourse from '../modals/ModalCourse/ModalCourse'
import { ICourse } from '../../models/ICourse'
import { useRouter } from 'next/router'
import { useAppDispatch } from '../../store/hooks'
import { openLeadModal } from '../../store/reducers/leadSlice'


interface LayoutProps {
  courses: ICourse[]
  children: ReactNode
}

function Layout({children, courses}: LayoutProps) {
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (router.query?.course) {
      dispatch(openLeadModal(+router.query.course))
    }
  }, [router.query])

  return (
    <>
      <Header/>
      <main className={classes.Content}>{children}</main>
      <Footer/>

      <ModalCourse courses={courses}/>
    </>
  )
}

export default Layout