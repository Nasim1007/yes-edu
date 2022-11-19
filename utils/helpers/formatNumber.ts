import parsePhoneNumberFromString, { AsYouType } from 'libphonenumber-js'

export const normalizePhoneNumber = (value: string) => {
  const phoneNumber = parsePhoneNumberFromString(value, 'TJ')

  if(!phoneNumber){
    return value
  }

  return new AsYouType('TJ').input(value)
}