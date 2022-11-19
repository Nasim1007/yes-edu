export interface IReview {
  id: number
  author: {
    avatar: string
    name: string
    job?: string
  }
  text: string
}