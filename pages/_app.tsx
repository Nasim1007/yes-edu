import '../styles/index.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/store'
import Layout from '../components/Layout/Layout'
import { ICourse } from '../models/ICourse'
import { courseList } from '../data/courseList'

interface AppState extends AppProps {
  courses: ICourse[]
}

function App({Component, pageProps, courses}: AppState) {
  return (
    <Provider store={store}>
      <Layout courses={courses}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

App.getInitialProps = async (ctx: any) => {
  return { courses: courseList }
}

export default App