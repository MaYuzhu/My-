import ajax from './ajax'

//获取地址信息(根据经纬度串)
export const reqAddress = geohash => ajax('/api/position/' + geohash)

//获取msite页面食品分类列表
export const reqFoods = () => ajax('/api/index_category')

//获取msite商铺列表(根据经纬度)
export const reqShops = ({latitude, longitude}) => ajax('/api/shops',{latitude, longitude})

//获取图片验证码
export const reqCaptchas = () => ajax('/api/captchas')

//账号密码登录
export const accountLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {name, pwd, captcha}, 'POST')

//获取短信验证码
export const mobileCode = phone => ajax('/api/sendcode', {phone})

//手机号验证码登录
export const phoneLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')

//获取用户信息(根据会话)
export const reqUserinfo = () => ajax('/api/userinfo')

/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods')


