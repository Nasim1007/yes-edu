import classes from '../Modal.module.scss'
import Modal from '../../UI/Modal/Modal'
import Input from '../../UI/Input/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../../UI/Button/Button'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { clearState, closeLeadModal, sendLead } from '../../../store/reducers/leadSlice'
import { ICourse } from '../../../models/ICourse'
import { normalizePhoneNumber } from '../../../utils/helpers/formatNumber'
import { validatePhoneNumberLength } from 'libphonenumber-js'
import ModalCourseResponse from './ModalCourseResponse'
import Loader from '../../UI/Loader/Loader'
import { useRouter } from 'next/router'

type Inputs = {
  fullName: string,
  contact: string,
  course: string
}

interface ModalCourseProps {
  courses: ICourse[]
}

function ModalCourse({ courses }: ModalCourseProps) {
  const { isOpen, status, selectedCourse } = useAppSelector(state => state.lead)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
    formState: { errors },
    clearErrors
  } = useForm<Inputs>({
    mode: 'onSubmit',
  })

  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(sendLead({
      firstName: data.fullName,
      phone: data.contact,
      course: data.course
    }))
  }

  return (
    <Modal
      className={classes.Modal}
      isOpen={isOpen}
      onClose={() => dispatch(closeLeadModal())}
      onDidUnmount={() => {
        reset()
        dispatch(clearState())
        if (router.query?.course) {
          router.replace(router.pathname)
        }

      }}
    >
      {status === 'normal' ? (
        <>
          <h2 className={classes.Title}>Оставьте контакты</h2>
          <p className={classes.Info}>Мы с вами свяжемся!</p>

          <form
            className={classes.Form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              className={classes.Input}
              label="Как вас зовут?"
              type="text"
              errorMessage={errors.fullName?.message}
              register={register('fullName', {
                required: {
                  message: 'Введите своё имя',
                  value: true
                },
              })}
            />
            <Input
              label="Номер телефона"
              className={classes.Input}
              type="tel"
              errorMessage={errors.contact?.message}
              register={register('contact', {
                required: {
                  message: 'Введите номер телефона',
                  value: true
                },
                onChange: (event) => {
                  event.target.value = normalizePhoneNumber(event.target.value)
                },
                validate: (value) => (
                  (validatePhoneNumberLength(value, 'TJ')) ? 'Некорректный номер' : true
                )
          
              })}
            />
            <div>
              <div className={classes.SelectWrapper}>
                <select
                  className={classes.Select}
                  {...register('course', {
                    required: {
                      message: 'Выберите курс',
                      value: true
                    },
                  })}
                >
                  <option className={classes.Option} value="" disabled selected hidden>Выберите курс</option>
                  {courses?.map(course => (
                    <option
                      selected={selectedCourse === course.id || false}
                      key={course.id}
                      value={course.name}
                    >{course.name}</option>
                  ))}
                </select>
              </div>
              {errors.course && <small className={classes.ErrorMessage}>{errors.course.message}</small>}
            </div>
            <Button
              type="submit"
              className={classes.Button}
            >
              Записаться
            </Button>
          </form>
        </>
      ) : (
        <ModalCourseResponse />
      )}
    </Modal>
  )
}

export default ModalCourse