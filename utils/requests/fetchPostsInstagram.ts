import { IPostInstagram } from './../../models/IPost';

import axios from 'axios'

export async function fetchPostsInstagram(limit?: number): Promise<IPostInstagram[] | null> {
  try {
    const {data} = await axios.get(`https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&&access_token=${process.env.INSTAGRAM_TOKEN}`)
    if (limit) return data.data.slice(0, limit)
    
    return data.data
    
  } catch (error) {
    return null
  }
}