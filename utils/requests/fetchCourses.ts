import { ICourse } from '../../models/ICourse'
import axios from 'axios'

export async function fetchCourses(limit?: number): Promise<ICourse[] | null> {
  try {
    const {data} = await axios.get(`${process.env.API_URL}/course`)
    if (limit) return data.data.reverse().slice(0, limit)
    return data.data.reverse()

    
  } catch (error) {
    return null
  }
}