'use strict'
var cmm = cmm || {}
cmm = (()=>{
	const init = ctx => {
		localStorage.setItem('ctx', ctx)
		$('#manager_register').click(e => {location.href = `${ctx}/admin/mgr/register`})
		$('#teacher_register').click(e => {location.href = `${ctx}/admin/tea/register`})
		$(`#linkedin`).click(e => {location.href = `${ctx}/`})
		$(`#stu-join`).click(e => {location.href = `${ctx}/user/register`})
		$(`#stu-login`).click(e => {location.href = `${ctx}/user/login`})
		$(`#blog_default`).click(e => {location.href = `${ctx}/content/bbs/index`})
		
	}
	const goHome = () => {
		$(`#goHome`).click(e => {location.href = ` ${localStorage.getItem('ctx')}/`})
	}
	return {init, goHome}
})()
var wow = wow || {}
wow = (()=>{
	const init = () =>{
	
		$(`#icon1`).html(`<img src="https://file3.instiz.net/data/cached_img/upload/2018/10/14/13/1654799b2f9006d8d363e8949a510cfe.jpg" alt="">`)
		$(`#icon2`).html(`<img src="https://i.pinimg.com/originals/f6/03/18/f60318a07af7fda374230b6d568d0b25.jpg" alt="">`)
		$(`#icon3`).html(`<img src="https://www.gangel.kr/files/attach/images/287/512/336/001/711cc176bb3915fc6d93fc48f209ec7c.jpg" alt="">`)
	}
	return {init}
})()
var mainSlider = mainSlider || {}
mainSlider = (()=>{
	const init = () =>{
		$(`#title`).text(`원어민 어학 사이트`)
		$(`#message`).text(`화상강의솔루션, 스카이프 등을 이용하여 필리핀등 원어민 강사와 \n
							한국 학생간에 회화 교육을 하는 사이트 구축.`)
	}
	return {init}
})()

