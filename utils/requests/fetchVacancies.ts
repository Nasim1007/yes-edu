import { vacancyList } from '../../data/vacancyList'
import { IVacancy } from '../../models/IVacancy'

export async function fetchVacancies(): Promise<IVacancy[] | null> {
  return vacancyList
}