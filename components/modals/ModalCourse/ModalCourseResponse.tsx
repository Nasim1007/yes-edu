import classes from '../Modal.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import Button from '../../UI/Button/Button'
import { clearState, closeLeadModal } from '../../../store/reducers/leadSlice'
import Loader from '../../UI/Loader/Loader'

function ModalCourseResponse() {
  const { status } = useAppSelector(state => state.lead)
  const dispatch = useAppDispatch()

  return (
    <div className={classes.Fetch}>
      <div className={classes.Wrapper}>

        {status === 'pending' ? (
          <Loader />
        ) : status === 'fulfilled' ? (
          <div>
            <img
              className={classes.Icon}
              src="/assets/icons/success.svg"
              alt=""
              width={120}
              height={120}
            />
            <p className={classes.Message}>Успешно</p>
            <Button
              className={classes.Back}
              onClick={() => {
                dispatch(closeLeadModal())
              }}
            >
              Закрыть
            </Button>
          </div>
        ) : (
          <div>
            <img
              className={classes.Icon}
              src="/assets/icons/error.svg"
              alt=""
              width={120}
              height={120}
            />
            <p className={classes.Message}>Произошла ошибка</p>
            <Button
              className={classes.Back}
              onClick={() => dispatch(closeLeadModal())}
            >
              Закрыть
            </Button>
          </div>
        )}
      </div>

    </div>
  )
}

export default ModalCourseResponse