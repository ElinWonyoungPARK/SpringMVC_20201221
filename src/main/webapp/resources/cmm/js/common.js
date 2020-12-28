'use strict'
var common = common || {}
common = (()=>{
	const init = ctx => {
		alert(`TEST 15:15`)
		localStorage.setItem('ctx', ctx)
		$('#manager_register').click(e => {location.href = `${ctx}/admin/mgr/register`})
		$('#teacher_register').click(e => {location.href = `${ctx}/admin/tea/register`})
		$(`#linkedin`).click(e => {location.href = `${ctx}/`})
		$(`#stu-join`).click(e => {location.href = `${ctx}/user/register`})
		$(`#stu-login`).click(e => {location.href = `${ctx}/user/login`})
		$(`#blog_default`).click(e => {location.href = `${ctx}/content/bbs/index`})
		$(`#icon1`).html(`<img src="https://mblogthumb-phinf.pstatic.net/MjAyMDEwMDJfMjk1/MDAxNjAxNTg2MDE0NjY3.EEKsq42vwO7wxWYHCqI4bgpoMcjW8LmopdZ8jhEwoDwg.z4ehnyLSIwNPidmwdQm5NPMMe8oMhUhiq-3LZDXQw8gg.JPEG.begin22again/20201001_180011.jpg?type=w2" alt="">`)
		$(`#icon2`).html(`<img src="https://i.pinimg.com/originals/26/be/e6/26bee6282da6e10dfd7fa0510456f1f4.jpg" alt="">`)
		$(`#icon3`).html(`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDC1RCRAyE8HBxfy5coa6rjDSiR_mE5gybRw&usqp=CAU" alt="">`)
		$(`#title`).text(`원어민 어학 사이트`)
		$(`#message`).text(`화상강의솔루션, 스카이프 등을 이용하여 필리핀등 원어민 강사와 \n
							한국 학생간에 회화 교육을 하는 사이트 구축.`)
		$(`#bbs`).html(`<a href="#">게시판<i class="fa fa-angle-down"></i></a>
						<ul id="ul" role="menu" class="sub-menu"></ul>`)
		let arr = [{id:'a', val: 'a'}, {id:'b', val: 'b'},{id:'c', val: 'c'},{id:'d', val: 'd'},{id:'e', val: 'c'}]
		$.each(arr, (i, j) => {
			$(`<li/>`)
			.attr({id: `${j.id}`})
			.text(`${j.val}`)
			.appendTo(`#ul`)
			.click(e => {
				alert(`${j.id}`)
			})
		})
	}
	const goHome = () => {
		$(`#goHome`).click(e => {location.href = ` ${localStorage.getItem('ctx')}/`})
	}
	return {init, goHome}
})()