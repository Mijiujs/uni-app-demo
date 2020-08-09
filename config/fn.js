function getToday () {
  let now = new Date()
  let month = (now.getMonth() + 1 < 10) ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1)
  let day = (now.getDate() < 10) ? '0' + now.getDate() : now.getDate()
  return now.getFullYear() + '-' + month + '-' + day
}
// 获取前后十二年
function getDate(type) {
	const date = new Date();

	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	if (type === 'start') {
		year = year - 10;
	} else if (type === 'end') {
		year = year + 2;
	}
	month = month > 9 ? month : '0' + month;;
	day = day > 9 ? day : '0' + day;

	return `${year}-${month}-${day}`;
}
export {
	getToday,
	getDate
}