import { ISlide } from '../../models/ISlide'
import { mainSlides } from '../../data/mainSlides'

export async function fetchSlides(): Promise<ISlide[] | null> {
  return mainSlides
}