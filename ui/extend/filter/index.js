document.getElementById('extend_filter_items').onclick = function (e) {
	var target = e.target
	var value = target.getAttribute('data-value')

	if (value === null) return

	window.$app.emitter.emit('service:getFormModalData', { value: value })
}
