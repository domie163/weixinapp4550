import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 书籍信息
const ShujixinxiModel = sequelize.define('ShujixinxiModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	shujimingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '书籍名称'
	},
	shujifenlei: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '书籍分类'
	},
	tupian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '图片'
	},
	zuozhe: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '作者'
	},
	chubanshe: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '出版社'
	},
	shujijianjie: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '书籍简介'
	},
	clicktime: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('clicktime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '最近点击时间'
	},
	clicknum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '点击次数'
	},
	price: {
		type: DataTypes.FLOAT,
		defaultValue: 0,
		allowNull: true,
		comment: '价格'
	},
	onelimittimes: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '单限'
	},
	alllimittimes: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '库存'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'shujixinxi'
})

export default ShujixinxiModel
