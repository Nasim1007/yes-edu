import classes from './Button.module.scss'
import { forwardRef, ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  typeButton?: 'link' | 'button'
  children: ReactNode
  className?: string
  background?: 'primary' | 'secondary' | 'transparent'
  color?: 'primary' | 'secondary' | 'white' | 'black'
  border?: 'primary' | 'secondary' | 'none'
  [key: string]: any
}

const Button = forwardRef(({border = 'none', color = 'white', typeButton = 'button', background = 'primary', className, children, ...keys}: ButtonProps, ref: any) => {

  const cls = [
    classes.Button,
  ]

  if (className) cls.push(className)


  switch (background) {
    case 'primary':
      cls.push(classes.PrimaryBg)
      break
    case 'secondary':
      cls.push(classes.SecondaryBg)
      break
    case 'transparent':
      cls.push(classes.TransparentBg)
      break
  }


  switch (color) {
    case 'primary':
      cls.push(classes.PrimaryColor)
      break
    case 'secondary':
      cls.push(classes.SecondaryColor)
      break
    case 'white':
      cls.push(classes.WhiteColor)
      break
    case 'black':
      cls.push(classes.BlackColor)
      break
  }

  switch (background) {
    case 'primary':
      cls.push(classes.PrimaryBorder)
      break
    case 'secondary':
      cls.push(classes.SecondaryBorder)
      break
    case 'transparent':
      cls.push(classes.BorderNone)
      break
  }

  switch (border) {
    case 'none':
      cls.push(classes.BorderNone)
      break
    case 'primary':
      cls.push(classes.BorderPrimary)
      break
    case 'secondary':
      cls.push(classes.BorderSecondary)
      break
  }


  if (typeButton === 'link') {
    return (
      <Link
        className={cls.join(' ')}
        href={keys.href}
        {...keys}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={cls.join(' ')}
      ref={ref}
      {...keys}
    >{children}</button>
  )
})

export default Button