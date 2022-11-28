import { ISlide } from '../../models/ISlide'
import axios from 'axios'


export async function fetchSlides(): Promise<ISlide[] | null> {
  try {
    const {data} = await axios.get(`${process.env.API_URL}/slider`)
    return data.data
    
  } catch (error) {
    return null
  }
}