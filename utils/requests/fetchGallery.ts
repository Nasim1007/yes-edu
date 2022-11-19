import { photos } from '../../data/photos'
import { IPicture } from '../../models/IPicture'

export async function fetchGallery(): Promise<IPicture[] | null> {
  return photos
}