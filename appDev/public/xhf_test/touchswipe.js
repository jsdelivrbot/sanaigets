//   http://blog.csdn.net/libin_1/article/details/50534611

<script type="text/javascript">
            /*******************************旋转程序****************************************/
            /*  $(function() { //旋转程序
                //  runhijs(); //官方程序不知为什么要加，貌似不加也可以
                var angle = 0;
                touch.on('#target', 'touchstart', function(ev) {
                    ev.startRotate();
                    ev.preventDefault();
                });
                touch.on('#target', 'rotate', function(ev) {
                    var totalAngle = angle + ev.rotation;
                    if (ev.fingerStatus === 'end') { //这一句很重要
                        angle = angle + ev.rotation;
                        $('.div1').text("本次旋转角度为:" + ev.rotation + "度, 方向:" + ev.direction + ".");
                    }
                    this.style.webkitTransform = 'rotate(' + totalAngle + 'deg)';
                });
            }); */
            /*******************************放大缩小****************************************/
            //                      $(function() {     //放大缩小
            //                          var target = document.getElementById("target");
            //                          target.style.webkitTransition = 'all ease 0.05s';
            //                          touch.on('#target', 'touchstart', function(ev) {
            //                              ev.preventDefault();
            //                          });
            //                          var initialScale = 1;
            //                          var currentScale;
            //                          touch.on('#target', 'pinchend', function(ev) {
            //                              currentScale = ev.scale - 1;
            //                              currentScale = initialScale + currentScale;
            //                              currentScale = currentScale > 5 ? 5 : currentScale; //自己调节可以放大的最大倍数
            //                              currentScale = currentScale < 0.1 ? 0.1 : currentScale; //自己调节可以缩小的最小倍数
            //                              this.style.webkitTransform = 'scale(' + currentScale + ')';
            //                              $('.div1').text("当前缩放比例为:" + currentScale + "倍.");
            //                          });
            //                          touch.on('#target', 'pinchend', function(ev) {
            //                              initialScale = currentScale;
            //                          });
            //                      });
            /*******************************识别tap[单击], doubletap[双击]和hold[长按]事件****************************************/
            //          $(function() { //识别tap[单击], doubletap[双击]和hold[长按]事件
            //              $('.div1').text("识别tap[单击], doubletap[双击]和hold[长按]事件.");
            //              // touch.on('#target', 'touchstart', function(ev){
            //              // ev.preventDefault();
            //              // });
            //              touch.on('#target', 'hold tap doubletap', function(ev) {
            //                  $('.div1').text("当前事件为: " + ev.type);
            //                  var _this = this;
            //                  this.classList.add("bounce");
            //                  touch.on(this, "webkitAnimationEnd", function() {
            //                      _this.classList.remove("bounce");
            //                  });
            //              });
            //          });
            /*******************************向左向右滑动****************************************/
            //          $(function() {
            //              var w = 205;
            //              var tw = play.offsetWidth;
            //              var lf = document.getElementById("target").offsetLeft;
            //              var rt = tw - w - lf;
            //              $('.div1').text("向左, 向右swipe滑动");
            //              touch.on('#target', 'touchstart', function(ev) {
            //                  ev.preventDefault();
            //              });
            //              var target = document.getElementById("target");
            //              target.style.webkitTransition = 'all ease 0.2s';
            //              touch.on(target, 'swiperight', function(ev) {
            //                  this.style.webkitTransform = "translate3d(" + rt + "px,0,0)";
            //                  $('.div1').text("向右滑动.");
            //              });
            //              touch.on(target, 'swipeleft', function(ev) {
            //                  $('.div1').text("向左滑动.");
            //                  this.style.webkitTransform = "translate3d(-" + this.offsetLeft + "px,0,0)";
            //              });
            //          });
            /*******************************抓取并拖拽目标元素****************************************/
                        $(function() {
                            $('.div1').text("抓取并拖拽目标元素");
                            touch.on('#target', 'touchstart', function(ev) {
                                ev.preventDefault();
                    });
                        var target = document.getElementById("target");
                        var dx, dy;
                            touch.on('#target', 'drag', function(ev) {
                                dx = dx || 0;
                                dy = dy || 0;
                                var offx = dx + ev.x + "px";
                            var offy = dy + ev.y + "px";
                                this.style.webkitTransform = "translate3d(" + offx + "," + offy + ",0)";
                            });
                            touch.on('#target', 'dragend', function(ev) {
                                dx += ev.x;
                                dy += ev.y;
                                $('.div1').text("当前x值为:" + dx + ", 当前y值为:" + dy + ".");
                            });
                        });
            /*******************************抓取并拖拽目标元素****************************************/
            //          $(function() {
            //              $('.div1').text("识别原生事件");
            //              touch.on('#target', 'touchstart', function(ev) {
            //                  ev.preventDefault();
            //              });
            //              touch.on('#target', 'touchstart touchmove touchend', function(ev) {
            //                  var _this = this;
            //                  if (!this.classList.contains("bounce")) {
            //                      if (ev.type === "mousedown" || ev.type === "touchstart") {
            //                          this.classList.add("bounce");
            //                          touch.on(this, "webkitAnimationEnd", function() {
            //                              _this.classList.remove("bounce");
            //                          });
            //                      }
            //                  }
            //                  $('.div1').text("当前为原生事件: " + ev.type);
            //              });
            //          });
        </script>