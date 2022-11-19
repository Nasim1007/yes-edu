import { AllHTMLAttributes, FC, forwardRef, HTMLInputTypeAttribute, useEffect, useId, useRef, useState } from 'react'
import classes from './Input.module.scss'
import clsx from 'clsx'

interface InputProps extends AllHTMLAttributes<HTMLElement> {
  label: string
  type?: HTMLInputTypeAttribute
  className?: string
  placeholder?: string
  errorMessage?: string
  register?: any
}

const Input: FC<InputProps> = forwardRef(({className, label, register, errorMessage, ...keys}, ref: any) => {
  const id = useId()
  const [isActiveLabel, setIsActiveLabel] = useState<boolean>(!!keys?.value)

  return (
    <div className={clsx(classes.InputGroup, className)}>
      <div className={classes.InputWrap}>
        <input
          id={id + '-type'}
          className={clsx(classes.Input, errorMessage && classes.Error)}
          ref={ref}
          onFocus={(event) => {
            setIsActiveLabel(true)
            register?.onFocus && register.onFocus(event)
          }}

          {...keys}
          {...register}
          onChange={event => {
            setIsActiveLabel(true)
            register?.onChange && register.onChange(event)
          }}
          onInput={(event: any) => {
            if (event.target.value === '') {
              setIsActiveLabel(false)
            }
          }}
          onBlur={event => {
            if (event.target.value === '') {
              setIsActiveLabel(false)
            }
            if (event.target.value === '') {
              setIsActiveLabel(false)
            }
            register?.onBlur && register.onBlur(event)
          }}
        />
        <label
          className={`${classes.Label} ${isActiveLabel ? classes.ActiveLabel : ''}`}
          htmlFor={id + '-type'}
        >{label}</label>
      </div>
      {errorMessage && <small className={classes.ErrorMessage}>{errorMessage}</small>}
    </div>

  )
})

// function Input({type = 'text', placeholder, label, className}: InputProps) {
//   const htmlFor = label.replaceAll(' ', '-')
//   const inputRef = useRef<HTMLInputElement>(null)
//   const [isActiveLabel, setIsActiveLabel] = useState<boolean>(!!otherProps?.value)
//
//   useEffect(() => {
//     if (otherProps?.value) {
//       setIsActiveLabel(true)
//     }
//   }, [otherProps])
//
//   return (
//     <div className={clsx(classes.InputWrap, className)}>
//       <input
//         type={type}
//         id={htmlFor}
//         className={classes.Input}
//         placeholder={placeholder}
//         ref={inputRef}
//         {...otherProps}
//         onFocus={(event) => {
//           setIsActiveLabel(true)
//           otherProps?.onFocus && otherProps.onFocus(event)
//         }}
//         onChange={event => {
//           setIsActiveLabel(true)
//           otherProps?.onChange && otherProps.onChange(event)
//         }}
//         onBlur={event => {
//           if (event.target.value === '') {
//             setIsActiveLabel(false)
//           }
//           otherProps?.onBlur && otherProps.onBlur(event)
//         }}
//       />
//       <label
//         className={`${classes.Label} ${isActiveLabel ? classes.ActiveLabel : ''}`}
//         htmlFor={htmlFor}
//       >{label}</label>
//     </div>
//   )
// }

export default Input