//进度条加载
  var imgArr = ['img/2.jpg','img/headImg1.png','img/weizhi.png','img/renwu.png','img/email.png','img/iphone.png'];
  var count = 0;
  var loading_sp = document.getElementsByClassName('loading_sp')[0];
  for(var i = 0,len = imgArr.length;i < len; i ++){
    var img = new Image();
    img.src = imgArr[i];
    img.onload = function(){
      count ++;
      loading_sp.innerHTML = parseInt(count/len*100)+'%';
      if(count >= len){
        $('.loading').css({display:'none'});
        $('.nav').css({'visibility':'visible'});
        scrollAn(body_h,pageNum.length);
      }
    }
    img.onerror = function(){
      count ++;
    }
  }
  // jquery 兼容的滚轮事件
  var num = 0;
  var finish = true;
  var body_h=$("body").height();
  var pageNum = document.getElementsByClassName('page');
  function scrollAn(bodyH,pages){
    $(document).on("mousewheel DOMMouseScroll", function(e) {
      if (finish) {
          var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
        (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
        if (delta > 0) {
            // 向上滚
            num--;
            if(num < 0) num = 0;
            move();
          } else if (delta < 0) {
            // 向下滚
            num++;
            if(num > pages-1) num =pages-1;
            move();
        }
      };
    });
  }
  $('.nav .nav_sp').each(function(){
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.box').stop().animate({top:-body_h*$(this).index()},'slow');
        $('.box .page').removeClass('focus').eq(num).addClass('focus');
        num = $(this).index();
      })
    })
  $('.boxBtn .link').each(function(){
    $(this).click(function(){
        num = $(this).index();
        $('.nav .nav_sp').eq($(this).index()).addClass('active').siblings().removeClass('active');
        $('.box').stop().animate({top:-body_h*($(this).index())},'slow');
        $('.box .page').removeClass('focus').eq(num).addClass('focus');

      })
  })
  function move(){
    finish = false;
    $(".box").stop().animate({top:-body_h*num},"slow",function(){finish = true});
    $('.nav .nav_sp').removeClass('active').eq(num).addClass('active');
    $('.box .page').removeClass('focus').eq(num).addClass('focus');
  }
  $(window).resize(function(){
    body_h=$("body").height();
    $('.box').css({top:-body_h*num});
    $('.head_img').css({'height':$('.head_img').width()});
  })
  // page1
  $('.head_img').css({'height':$('.head_img').width()});
  var headN = 0.1;
  var headT = -1;
  var headW = 105;
  var timerHead = setInterval(function(){
    headW += headN;
    if(headW == 138 || headW == 105){headN = headN * headT;}
    $('.header').css({'backgroundSize':headW+'%'});
    //console.log(headW);
  },60)
  //page2
   $(document).ready(function(){
    function rnd(n, m) {
          return Math.floor(Math.random() * (m - n) + n)
        };
        var canvas = document.querySelector("#myCanvas");
        var context = canvas.getContext("2d");
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        canvas.width = winW;
        canvas.height = winH;
        window.onresize = function(){
          winW = window.innerWidth;
          winH = window.innerHeight;
          canvas.width = winW;
          canvas.height = winH;
        }
        var r = 255;
        var g = 255;
        var b = 255;
        var line = []; //点的信息
        var num = 10; //点的个数
        var oldPoint = [];
        for(var i = 0; i < num; i++) {
          line[i] = {
            w: 0,//点的宽
            h: 0,//点的高
            x: rnd(0, winW), //点的X坐标
            y: rnd(0, winH), //点的Y坐标
            speedX: rnd(-5, 5), //X轴移动的速度
            speedY: rnd(-5, 5) //Y轴移动的速度
          };
        }
        drawobj();
        window.requestAnimFrame = (function(){
          return window.requestAnimationFrame    ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                 window.setTimeout(callback, 1000 / 60);
              };
        })();
        //绘制动效函数
        function drawobj() {
          window.requestAnimationFrame(drawobj);
          context.clearRect(0, 0, winW, winH);
          // 画点
          for(var i = 0; i < num; i++) {
            drawPoint(line[i]);
            //坐标累加移动
            line[i].x += line[i].speedX;
            line[i].y += line[i].speedY;
            //碰撞检测
            if(line[i].x <= 0) {
              line[i].x = 0;
              line[i].speedX *= -1;
            }
            if(line[i].x >= winW-line[i].w) {
              line[i].x = winW-line[i].w;
              line[i].speedX *= -1;
            }
            if(line[i].y <= 0) {
              line[i].y = 0;
              line[i].speedY *= -1;
            }
            if(line[i].y >= winH-line[i].h) {
              line[i].y = winH-line[i].h;
              line[i].speedY *= -1;
            }
          }
          // 画线
          context.beginPath();
          context.moveTo(line[0].x,line[0].y)
            for(var i = 1; i < num; i++) {
            context.lineTo(line[i].x,line[i].y);
            }
            context.strokeStyle = 'rgba('+r+','+g+','+b+',1)';
            context.closePath();
            context.stroke();
            // 画阴影
            var arr = [] ;
            for(var i =  0; i < num ; i++){
              arr.push({x:line[i].x , y:line[i].y});
            }
            // consle.log(arr)
            oldPoint.push(arr);
            while(oldPoint.length > 20 ){
              oldPoint.shift();
            }
            // console.log(arr);
            // console.log(oldPoint);
            for (var i = 0; i < oldPoint.length; i++) {
              context.beginPath();
              context.moveTo(oldPoint[i][0].x,oldPoint[i][0].y)
            for (var j = 1; j < num; j++) {
              context.lineTo(oldPoint[i][j].x,oldPoint[i][j].y);
            }
            context.closePath();
            var opacity = i/oldPoint.length;
            context.strokeStyle = 'rgba('+r+','+g+','+b+','+opacity+')'
            context.stroke();
           }
        }
        //画点函数
        function drawPoint(p) {
          context.fillStyle = '#fff';
          context.fillRect(p.x, p.y, p.w, p.h);
          context.strokeRect(p.x, p.y, p.w, p.h);
        }
   })