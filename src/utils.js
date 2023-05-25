export const nullFn = () => null
export const sleep = (ms) => (value) => {
	return new Promise((res) => {
		setTimeout(() => res(value), ms)
	})
}
export const dateToHuman = dateString => {
	const date = new Date(dateString)
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

	return months[date.getMonth()] + " " + date.getDate()
}

