import { IFile } from './../../models/ILead';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILead, IVacan } from '../../models/ILead'
import axios from 'axios'
import { ICourse } from '../../models/ICourse'


interface LeadState {
  isOpen: boolean
  isOpenVacan: boolean
  isResume: boolean
  status: 'normal' | 'pending' | 'fulfilled' | 'error',
  selectedCourse: number | null
  selectedVacan: number | null

}

export const initialState: LeadState = {
  isOpen: false,
  isOpenVacan: false,
  isResume: false,
  status: 'normal',
  selectedCourse: null,
  selectedVacan: null

}

export const sendLead = createAsyncThunk('lead/sendLead', async (form: ILead) => {
  const TOKEN = '5614764036:AAETUE47tTs8Iae2iTLqYbJ9W3M-p5u7V80'
  const CHAT_ID = '-1001693103687'
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

  const { course, phone, firstName } = form

  let device = ''

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {

    device = 'Телефон'

  } else device = 'Компьютер'

  let message = `<b>Заявка с сайта!</b>\n`
  message += `<b>Отправитель: </b> ${firstName}\n`
  message += `<b>Номер телефона:</b> ${phone.replace(/\s/g, '')}\n`
  message += `<b>Курс: </b> ${course}\n`
  message += `<b>Дата: ${new Date().toLocaleString()}</b>\n`
  message += `<b>Тип устройства: ${device}</b>`

  try {
    const status = await axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
    })

    return status
  } catch (error) {
    return false
  }

})

export const sendVacan = createAsyncThunk('lead/sendLead', async (form: IVacan) => {
  const TOKEN = '5614764036:AAETUE47tTs8Iae2iTLqYbJ9W3M-p5u7V80'
  const CHAT_ID = '-1001693103687'
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

  const { vacan, phone, firstName } = form

  let device = ''

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {

    device = 'Телефон'

  } else device = 'Компьютер'

  let message = `<b>Заявка с сайта!</b>\n`
  message += `<b>Отправитель: </b> ${firstName}\n`
  message += `<b>Номер телефона:</b> ${phone.replace(/\s/g, '')}\n`
  message += `<b>Вакансия: </b> ${vacan}\n`
  message += `<b>Дата: ${new Date().toLocaleString()}</b>\n`
  message += `<b>Тип устройства: ${device}</b>`

  try {
    const status = await axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
    })

    return status
  } catch (error) {
    return false
  }

})
export const sendResume = createAsyncThunk('lead/sendLead', async (form: IFile) => {
  const TOKEN = '5614764036:AAETUE47tTs8Iae2iTLqYbJ9W3M-p5u7V80'
  const CHAT_ID = '-1001693103687'
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendDocument`
  const URL_API2 = `https://api.telegram.org/bot${TOKEN}/sendMessage`

  const { file, phone, firstName } = form

  let device = ''

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {

    device = 'Телефон'

  } else device = 'Компьютер'
  let message = `<b>Заявка с сайта!</b>\n`
  message += `<b>Отправитель: </b> ${firstName}\n`
  message += `<b>Номер телефона:</b> ${phone.replace(/\s/g, '')}\n`
  message += `<b>Дата: ${new Date().toLocaleString()}</b>\n`
  message += `<b>Тип устройства: ${device}</b>`
  
  const formdata = new FormData()
  formdata.append('chat_id', CHAT_ID)
  formdata.append('document', file)


  try {
    await axios.post(URL_API2, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
    })
    const status = await axios.post(URL_API, formdata,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
    })
    return status
  } catch (error) {
    return false
  }

})

export const leadSlice = createSlice({
  name: 'lead',
  initialState,
  reducers: {
    toggleLeadModal(state) {
      state.isOpen = !state.isOpen
    },
    openLeadModal(state, action: PayloadAction<number | undefined>) {
      state.isOpen = true
      if (action?.payload) {
        state.selectedCourse = action.payload
      }
    },
    toggleVacanModal(state) {
      state.isOpenVacan = !state.isOpenVacan
    },
    openVacanModal(state, action: PayloadAction<number | undefined>) {
      state.isOpenVacan = true
      if (action?.payload) {
        state.selectedVacan = action.payload
      }
    },
    toggleResume(state){
      state.isResume = !state.isResume
    },
    openResume(state){
      state.isResume = true
    },
    closeLeadModal(state) {
      state.isOpen = false
      state.isOpenVacan = false
      state.isResume = false
    },
    clearState(state) {
      state.status = 'normal'
    },
  }
  ,
  extraReducers: builder => {
    builder.addCase(sendLead.pending, (state, action: any) => {
      state.status = 'pending'
    })
    builder.addCase(sendLead.fulfilled, (state, action: any) => {

      if (action.payload !== false) {
        if (action.payload.status !== 200) {
          state.status = 'error'
        } else {
          state.status = 'fulfilled'
        }
      } else {
        state.status = 'error'
      }
    })
  }
})

export const {
  openLeadModal,
  closeLeadModal,
  toggleLeadModal,
  toggleVacanModal,
  openVacanModal,
  toggleResume,
  openResume,
  clearState
} = leadSlice.actions