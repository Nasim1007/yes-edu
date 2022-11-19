import classes from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

function Loader({className}: LoaderProps) {
  return (
    <div className={`${classes.Loader} ${className || ''}`}>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  )
}

export default Loader