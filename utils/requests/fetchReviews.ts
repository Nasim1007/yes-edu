import { reviewList } from '../../data/reviewList'
import { IReview } from '../../models/IReview'

export async function fetchReviewClients(): Promise<IReview[] | null> {
  return reviewList
}

export async function fetchReviewTeachers(): Promise<IReview[] | null> {
  return reviewList
}