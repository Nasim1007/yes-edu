import { IPartner } from '../../models/IPartner'
import { partnerList } from '../../data/partnerList'

export async function fetchPartners(): Promise<IPartner[] | null> {
  return partnerList
}