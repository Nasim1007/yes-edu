import '../styles/index.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/store'
import Layout from '../components/Layout/Layout'
import { ICourse } from '../models/ICourse'
import { IVacancy } from '../models/IVacancy'
import { fetchCourses } from '../utils/requests/fetchCourses'
import { fetchVacancies } from '../utils/requests/fetchVacancies'

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
  const courseList: ICourse[] | null = await fetchCourses()
  const vacancies: IVacancy[] | null = await fetchVacancies()

  return {
    courses: courseList,
    vacancies
  }
}

export default App