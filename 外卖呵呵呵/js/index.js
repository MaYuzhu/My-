window.onload = function () {
		//底部导航
  var contentList = document.querySelectorAll('.app .content>section')
		var guideItems = document.querySelectorAll('.app .guide_item')

		for (var i = 0; i < guideItems.length; i++) {
				guideItems[i].index = i
				guideItems[i].addEventListener('touchend',function () {
						for (var j = 0; j < contentList.length; j++) {
								contentList[j].className = ''
								guideItems[j].className = 'guide_item'
							}
						var index = this.index
						contentList[index].className = 'on'
						this.className = 'guide_item on'
				})
		}


		//点击登录切换
		var login_flag = document.querySelectorAll('#login_flag>p')
		var form = document.querySelectorAll('.login_route form')

		for (var j = 0; j < login_flag.length; j++) {
				login_flag[j].index = j
				login_flag[j].addEventListener('touchend',function () {
						for(var i =0 ;i< login_flag.length; i++){
								login_flag[i].className = ""
								form[i].classList.add('active1')
						}
						var index1 = this.index
						login_flag[index1].className = "active"
						form[index1].classList.remove('active1')
				})
		}
		
		//控件
		var d1 = document.querySelector('.a1')
		var d2 = document.querySelector('.d2')
		var span = document.querySelector('.a1 span')
		var flag = false
		d1.onclick = function () {
				if(flag){
						d2.style.transform = 'translateX(0px)'
						d1.className = 'a1 d1'
						span.innerHTML = '...'
				}else {
						d2.style.transform = 'translateX(40px)'
						d1.className = 'a1 d1-1'
						span.innerHTML = 'abc'
				}
				flag = !flag
		}


}