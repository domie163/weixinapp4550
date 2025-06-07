import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YonghuController from './Yonghu'
import ShujifenleiController from './Shujifenlei'
import ShujixinxiController from './Shujixinxi'
import ChatController from './Chat'
import CartController from './Cart'
import OrdersController from './Orders'
import AddressController from './Address'
import StoreupController from './Storeup'
import NewsController from './News'
import DiscussshujixinxiController from './Discussshujixinxi'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/shujifenlei', ShujifenleiController({ config, db }))

	api.use('/shujixinxi', ShujixinxiController({ config, db }))

	api.use('/chat', ChatController({ config, db }))

	api.use('/cart', CartController({ config, db }))

	api.use('/orders', OrdersController({ config, db }))

	api.use('/address', AddressController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/discussshujixinxi', DiscussshujixinxiController({ config, db }))

	return api
}
