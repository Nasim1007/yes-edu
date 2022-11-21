import '../styles/index.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/store'
import Layout from '../components/Layout/Layout'
import { ICourse } from '../models/ICourse'
import { courseList } from '../data/courseList'
import { IVacancy } from '../models/IVacancy'
import { vacancyList } from '../data/vacancyList'

interface AppState extends AppProps {
  courses: ICourse[]
  vacancies: IVacancy[]
}

function App({ Component, pageProps, courses, vacancies }: AppState) {
  return (
    <Provider store={store}>
      <Layout courses={courses} vacancies={vacancies}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

App.getInitialProps = async (ctx: any) => {
  return {
    courses: courseList,
    vacancies: vacancyList
  }
}

export default App