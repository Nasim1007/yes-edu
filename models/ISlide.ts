export interface ISlide {
  id: number
  title: string
  description: string
  link: {
    href: string
    name: string
  }
  img: {
    jpg: string
    webp?: string
  }
}