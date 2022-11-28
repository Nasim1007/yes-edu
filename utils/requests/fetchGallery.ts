import { IPicture } from '../../models/IPicture'
import axios from "axios"

export async function fetchGallery(): Promise<IPicture[] | null> {
  try {
    const {data} = await axios.get(`${process.env.API_URL}/images`)
    return data.data
    
  } catch (error) {
    return null
  }
}
