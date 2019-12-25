














// var index = 0;
// var slider = document.getElementById('slider');
// var box = document.getElementById('box');
// var index = 1;
// var timer;
// var isMoving = false;
// var timer = setInterval(next,3000);


// function animate(obj,json,callback){
// 	clearInterval(obj.timer);
// 	obj.timer = setInterval(function(){
// 		var isStop = true;
// 		for(var attr in json){
// 			var now = 0;
// 			if(attr == 'opacity'){
// 				now = parseInt(getStyle(obj,attr)*100);
// 			}else{
// 				now = parseInt(getStyle(obj,attr));
// 			}
// 			var speed = (json[attr] - now) / 8;
// 			speed = speed>0?Math.ceil(speed):Math.floor(speed);
// 			var cur = now + speed;
// 			if(attr == 'opacity'){
// 				obj.style[attr] = cur / 100;
// 			}else{
// 				obj.style[attr] = cur + 'px';
// 			}
// 			if(json[attr] !== cur){
// 				isStop = false;
// 			}
// 		}
// 		if(isStop){
// 			clearInterval(obj.timer);
// 			callback&&callback();
// 		}
// 	}, 30)
// }

// function next(){
// 	index++;
// 	animate(slider,{left:-550*index},function(){
// 		if (index === 6) {
// 			slider.style.left = "-550px";
// 			index = 1;
// 		}
// 	});
// }


