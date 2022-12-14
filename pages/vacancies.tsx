import Vacancies from "../components/Vacancies/Vacancies";
import About from "../components/About/About";
import HeadPage from "../components/UI/HeadPage/HeadPage";
import HelpVacancy from "../components/HelpVacancy/HelpVacancy";
import ReviewTeachers from "../components/ReviewTeachers/ReviewTeachers";
import { IReview } from "../models/IReview";
import { fetchReviewTeachers } from "../utils/requests/fetchReviews";
import { IVacancy } from "../models/IVacancy";
import { fetchVacancies } from "../utils/requests/fetchVacancies";
import Head from "next/head";
import Advantages from "../components/Vacancies/Adventages/Advantages";

export async function getServerSideProps() {
  const reviews: IReview[] | null = await fetchReviewTeachers();
  const vacancies: IVacancy[] | null = await fetchVacancies();

  return {
    props: {
      vacancies,
      reviews,
    },
  };
}

interface VacanciesPageProps {
  reviews: IReview[];
  vacancies: IVacancy[];
}

export default function VacanciesPage({
  vacancies,
  reviews,
}: VacanciesPageProps) {
  return (
    <>
      <Head>
        <title>Вакансии - Образовательный центр</title>
        <meta name="description" content="Вакансии" />
        <meta name="description" content="Образовательный центр YESedu , это центр где используется  инновационная методика  которая даёт настоящий результат, что на шаг приближает к мечте."></meta>
        <meta name="keywords" content="Образовательный центр, 
Вакансия учителя в Таджикистане, 
Вакансия учителя русского в Душанбе, 
Вакансия учителя английского в Душанбе,
Вакансия учителя немецкого языка  в Душанбе,
Вакансия учителя в Душанбе"/>
      </Head>
      <HeadPage
      imgPosition="0 50%"
        img={{
          jpg: "/assets/img/yesedu-group.jpg",
          // webp: "/assets/img/photo_2022-12-06_07-20-10.jpg",
        }}
        posIsTop={true}
        title="Вакансии"
        description="Любишь преподавать? Найди свое место в нашей команде!"
      />
      <Vacancies vacancyList={vacancies} />
      <HelpVacancy />
      <About />
      <Advantages />
      <ReviewTeachers reviews={reviews} />
    </>
  );
}
