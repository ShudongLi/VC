import button from './docs/button'
import icon from './docs/icon'
import radio from './docs/radio'
import checkbox from './docs/checkbox'
import input from './docs/input'
import select from './docs/select'

export default [

	{

		title: 'Basic',
		children: [

			{

				name: 'Icon',
				title: 'Icon 图标',
				url: '/icon',
				component: icon
			}, {

				name: 'Button',
				title: 'Button 按钮',
				url: '/button',
				component: button
			}
		]
	}, {

		title: 'Form',
		children: [

			{

				name: 'Radio',
				title: 'Radio 单选',
				url: '/radio',
				component: radio
			}, {

				name: 'Checkbox',
				title: 'Checkbox 多选',
				url: '/checkbox',
				component: checkbox
			}, {

				name: 'Input',
				title: 'Input 输入框',
				url: '/input',
				component: input
			}, {

				name: 'InputNumber',
				title: 'InputNumber 计数器',
				url: '/inputnumber',
			}, {

				name: 'Select',
				title: 'Select 选择器',
				url: '/select',
				component: select
			}, {

				name: 'Switch',
				title: 'Switch 开关',
				url: '/switch',
			}, {

				name: 'Upload',
				title: 'Upload 上传',
				url: '/upload'
			}, {

				name: 'Rate',
				title: 'Rate 评分',
				url: '/rate'
			}, {

				name: 'Form',
				title: 'Form 表单',
				url: '/form'
			}
			
		]
	}, {

		title: 'Data'
	}, {

		title: 'Notice'
	}, {

		title: 'Navigation'
	}, {

		title: 'Others'
	}
]
