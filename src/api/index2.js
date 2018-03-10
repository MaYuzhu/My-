import ajax from './ajax'

export const reqAddress = (geohash) => ajax('/api/position', geohash)

export const reqFoods = () => ajax('/api/index_category')

export const reqShops = ({latitude, longitude}) => ajax('/api/shops', {latitude, longitude})

export const reqCaptcha = () => ajax('/api/captcha')

export const reqLongin = ({name, pwd, captcha}) => ajax('/api/login_pwd', {name, pwd, captcha}, 'POST')

export const reqSendcode = (phone) => ajax('/api/sendcode', phone)

export const reqSms = (phone, code) => ajax('/api/login_sms', geohash, 'POST')

export const reqUserinfo = () => ajax('/api/userinfo')



