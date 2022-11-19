import classes from './Layout.module.scss'
import { ReactNode, useEffect, useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ModalCourse from '../modals/ModalCourse/ModalCourse'
import { ICourse } from '../../models/ICourse'
import { useRouter } from 'next/router'
import { useAppDispatch } from '../../store/hooks'
import { openLeadModal, openVacanModal } from '../../store/reducers/leadSlice'
import ModalVacan from '../modals/ModalVacancie/ModalVacancie'
import { IVacancy } from '../../models/IVacancy'


interface LayoutProps {
  courses: ICourse[]
  children: ReactNode
  vacancies: IVacancy[]
}

function Layout({ children, courses, vacancies }: LayoutProps) {
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (router.query?.course) {
      dispatch(openLeadModal(+router.query.course))
    }
    if (router.query?.vacan) {
      dispatch(openVacanModal(+router.query.vacan))
    }
  }, [router.query])

  return (
    <>
      <Header />
      <main className={classes.Content}>{children}</main>
      <Footer />

      <ModalCourse courses={courses} />
      <ModalVacan vacancies={vacancies} />
    </>
  )
}

export default Layout