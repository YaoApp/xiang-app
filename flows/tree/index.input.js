function main(args) {
	return [
		{
			title: 'A',
			value: '0-0',
			children: [
				{
					title: 'A-1',
					value: '0-0-0',
					children: [
						{ title: 'A-1-1', value: '0-0-0-0' },
						{ title: 'A-1-2', value: '0-0-0-1' },
						{ title: 'A-1-3', value: '0-0-0-2' }
					]
				},
				{
					title: 'A-2',
					value: '0-0-1',
					children: [
						{ title: 'A-2-1', value: '0-0-1-0' },
						{ title: 'A-2-2', value: '0-0-1-1' },
						{ title: 'A-2-3', value: '0-0-1-2' }
					]
				},
				{
					title: 'A-3',
					value: '0-0-2'
				}
			]
		},
		{
			title: 'B',
			value: '0-1',
			children: [
				{ title: 'B-1', value: '0-1-0-0' },
				{ title: 'B-2', value: '0-1-0-1' },
				{ title: 'B-3', value: '0-1-0-2' }
			]
		},
		{
			title: 'C',
			value: '0-2'
		}
	]
}
