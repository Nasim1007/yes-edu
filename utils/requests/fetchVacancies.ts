import { IVacancy } from '../../models/IVacancy'
import axios from 'axios'

export async function fetchVacancies(): Promise<IVacancy[] | null> {
  try {
    const {data} = await axios.get(`${process.env.API_URL}/vacancies`)
    return data.data
  } catch (error) {
    return null
  }
}