import axios from 'axios'
import { IReview } from '../../models/IReview'

export async function fetchReviewClients(): Promise<IReview[] | null> {
  try {
    const {data} = await axios.get(`${process.env.API_URL}/reviews`)
    return data.data
    
  } catch (error) {
    return null
  }
}

export async function fetchReviewTeachers(): Promise<IReview[] | null> {
  try {
    const {data} = await axios.get(`${process.env.API_URL}/reviews`)
    return data.data
    
  } catch (error) {
    return null
  }
}