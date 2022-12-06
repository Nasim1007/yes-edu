export interface IGallery {
  pictures: IPicture[]
}

export interface IPicture {
  title: string
  altText?: string
  preview: {
    jpg: string
    webp?: string
  }
  picture: {
    jpg: string
    webp?: string
    width?: number
    height?: number
  }
}