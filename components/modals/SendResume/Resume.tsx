import classes from '../Modal.module.scss'
import Modal from '../../UI/Modal/Modal'
import Input from '../../UI/Input/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../../UI/Button/Button'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { clearState, closeLeadModal, sendResume } from '../../../store/reducers/leadSlice'
import { normalizePhoneNumber } from '../../../utils/helpers/formatNumber'
import { validatePhoneNumberLength } from 'libphonenumber-js'
import ModalCourseResponse from '../ModalCourse/ModalCourseResponse'
import { useRouter } from 'next/router'
import { useState } from 'react'

type Inputs = {
    fullName: string,
    contact: string,
    file: any
}


function Resume() {
    const { isResume, status} = useAppSelector(state => state.lead)
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [file, setFile] = useState(null)
    const handleLoad = (e: any) => {
        setFile(e.target.files[0])
    }

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
        dispatch(sendResume({
            firstName: data.fullName,
            phone: data.contact,
            file: file
        }))
    }

    return (
        <Modal
            className={classes.Modal}
            isOpen={isResume}
            onClose={() => dispatch(closeLeadModal())}
            onDidUnmount={() => {
                reset()
                dispatch(clearState())
                if (router.query?.resume) {
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
                        <input className={classes.File} type='file' onChange={handleLoad}/>
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

export default Resume