function Message(msg) {
	if (!msg) return ''

	const message = JSON.parse(msg)

	if (message.FROM === 'server') {
		return msg
	}

	if (message.FROM === 'client') {
		// {type:string,index:number}
		const { type, id } = message
		const data = getData()

		const target = {
			unread: 11,
			success: true,
			type,
			id
		}

		return JSON.stringify(target)
	}
}

function getData() {
	return {
		unread: 12,
		messages: [
			{
				type: '系统',
				items: [
					{
						id: 11,
						title: '通知标题123',
						at: '6月30日 12:00',
						content: '检测到有以下登录行为： 登录时间：2022-06-30 10:24（时间） 登录方式：手机号密码登录 登录设备：Mac 登陆地点：中国,浙江,杭州 如非本人操作，请尽快修改密码并开启登录保护，如是您本人操作，请忽略此次提醒',
						link: '/table/service',
						unread: true
					},
					{
						id: 12,
						title: '通知标题333',
						at: '6月30日 12:00',
						content: '检测到有以下登录行为： 登录时间：2022-06-30 10:24（时间） 登录方式：手机号密码登录 登录设备：Mac 登陆地点：中国,浙江,杭州 如非本人操作，请尽快修改密码并开启登录保护，如是您本人操作，请忽略此次提醒',
						link: '/',
						unread: false
					},
					{
						id: 13,
						title: '通知标题123',
						at: '6月30日 12:00',
						content: '检测到有以下登录行为： 登录时间：2022-06-30 10:24（时间） 登录方式：手机号密码登录 登录设备：Mac 登陆地点：中国,浙江,杭州 如非本人操作，请尽快修改密码并开启登录保护，如是您本人操作，请忽略此次提醒',
						link: '/',
						unread: true
					},
					{
						id: 14,
						title: '通知标题333',
						at: '6月30日 12:00',
						content: '检测到有以下登录行为： 登录时间：2022-06-30 10:24（时间） 登录方式：手机号密码登录 登录设备：Mac 登陆地点：中国,浙江,杭州 如非本人操作，请尽快修改密码并开启登录保护，如是您本人操作，请忽略此次提醒',
						link: '/',
						unread: false
					},
					{
						id: 15,
						title: '通知标题123',
						at: '6月30日 12:00',
						content: '检测到有以下登录行为： 登录时间：2022-06-30 10:24（时间） 登录方式：手机号密码登录 登录设备：Mac 登陆地点：中国,浙江,杭州 如非本人操作，请尽快修改密码并开启登录保护，如是您本人操作，请忽略此次提醒',
						link: '/',
						unread: true
					},
					{
						id: 16,
						title: '通知标题333',
						at: '6月30日 12:00',
						content: '检测到有以下登录行为： 登录时间：2022-06-30 10:24（时间） 登录方式：手机号密码登录 登录设备：Mac 登陆地点：中国,浙江,杭州 如非本人操作，请尽快修改密码并开启登录保护，如是您本人操作，请忽略此次提醒',
						link: '/',
						unread: false
					},
					{
						id: 17,
						title: '通知标题123',
						at: '6月30日 12:00',
						content: '检测到有以下登录行为： 登录时间：2022-06-30 10:24（时间） 登录方式：手机号密码登录 登录设备：Mac 登陆地点：中国,浙江,杭州 如非本人操作，请尽快修改密码并开启登录保护，如是您本人操作，请忽略此次提醒',
						link: '/',
						unread: true
					},
					{
						id: 18,
						title: '通知标题333',
						at: '6月30日 12:00',
						content: '检测到有以下登录行为： 登录时间：2022-06-30 10:24（时间） 登录方式：手机号密码登录 登录设备：Mac 登陆地点：中国,浙江,杭州 如非本人操作，请尽快修改密码并开启登录保护，如是您本人操作，请忽略此次提醒',
						link: '/',
						unread: false
					}
				]
			},
			{
				type: '用户',
				items: [
					{
						id: 21,
						title: '通知标题44',
						at: '6月30日 12:00',
						content: '检测到有以下登录行为： 登录时间：2022-06-30 10:24（时间） 登录方式：手机号密码登录 登录设备：Mac 登陆地点：中国,浙江,杭州 如非本人操作，请尽快修改密码并开启登录保护，如是您本人操作，请忽略此次提醒',
						link: '/',
						unread: true
					},
					{
						id: 22,
						title: '通知标题33',
						at: '6月30日 12:00',
						content: '检测到有以下登录行为： 登录时间：2022-06-30 10:24（时间） 登录方式：手机号密码登录 登录设备：Mac 登陆地点：中国,浙江,杭州 如非本人操作，请尽快修改密码并开启登录保护，如是您本人操作，请忽略此次提醒',
						link: '/',
						unread: false
					}
				]
			}
		]
	}
}

function test() {
	const config = Process('scripts.config.Get')

	const port = config.Port || '5099'
	const host = config.Host || `127.0.0.1:${port}`

	const ws = new WebSocket(`ws://${host}/websocket/notification`, 'yao-notification')

	ws.push(
		JSON.stringify({
			FROM: 'server',
			...getData()
		})
	)
}
