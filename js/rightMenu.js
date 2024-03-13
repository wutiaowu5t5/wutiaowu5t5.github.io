/*
 * @Description: 右键菜单js
 * @Author: 5t5
 * @Time: 2024/1/26 17:24
 */
//22.12.8 update：add mask
//22.12.9 update: add search in this page
function setMask(){//设置遮罩层
  if(document.getElementsByClassName("rmMask")[0] !== undefined){
    return document.getElementsByClassName("rmMask")[0];
  }
  mask = document.createElement('div');
  mask.className = "rmMask";
  mask.style.width = window.innerWidth + 'px';
  mask.style.height = window.innerHeight + 'px';
  mask.style.background = '#fff';
  mask.style.opacity = '.0';
  mask.style.position = 'fixed';
  mask.style.top = '0';
  mask.style.left = '0';
  mask.style.zIndex = 998;
  document.body.appendChild(mask);
  document.getElementById("rightMenu").style.zIndex=19198;
  return mask;
}

function insertAtCursor(myField, myValue) {
  
  //IE 浏览器
  if (document.selection) {
    myField.focus();
    sel = document.selection.createRange();
    sel.text = myValue;
    sel.select();
  }
  
  //FireFox、Chrome等
  else if (myField.selectionStart || myField.selectionStart == '0') {
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    
    // 保存滚动条
    var restoreTop = myField.scrollTop;
    myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
    
    if (restoreTop > 0) {
      myField.scrollTop = restoreTop;
    }
    
    myField.focus();
    myField.selectionStart = startPos + myValue.length;
    myField.selectionEnd = startPos + myValue.length;
  } else {
    myField.value += myValue;
    myField.focus();
  }
}
let rmf = {};
rmf.showRightMenu = function (isTrue, x = 0, y = 0) {
  let $rightMenu = $('#rightMenu');
  $rightMenu.css('top', x + 'px').css('left', y + 'px');
  
  if (isTrue) {
    $rightMenu.show();
  } else {
    $rightMenu.hide();
  }
}
rmf.switchDarkMode = function () {
  const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
  if (nowMode === 'light') {
    activateDarkMode()
    saveToLocal.set('theme', 'dark', 2)
    GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
  } else {
    activateLightMode()
    saveToLocal.set('theme', 'light', 2)
    GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
  }
  // handle some cases
  typeof utterancesTheme === 'function' && utterancesTheme()
  typeof FB === 'object' && window.loadFBComment()
  window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
};
rmf.yinyong=function(){
  var e = document.getElementsByClassName("el-textarea__inner")[0],
    t = document.createEvent("HTMLEvents");
  t.initEvent("input", !0, !0), e.value = d.value = "> "+getSelection().toString()+"\n\n", e.dispatchEvent(t);
  console.log(getSelection().toString());
  document.getElementsByClassName("el-textarea__inner")[0].value="> "+getSelection().toString()+"\n\n";
  Snackbar.show({
    text: '为保证最佳评论阅读体验，建议不要删除空行',
    pos: 'top-center',
    showAction: false,
  })
}
rmf.copyWordsLink = function () {
  let url = window.location.href
  let txa = document.createElement("textarea");
  txa.value = url;
  document.body.appendChild(txa)
  txa.select();
  document.execCommand("Copy");
  document.body.removeChild(txa);
  Snackbar.show({
    text: '链接复制成功！快去分享吧！',
    pos: 'top-right',
    showAction: false
  });
}
rmf.switchReadMode = function () {
  const $body = document.body
  $body.classList.add('read-mode')
  const newEle = document.createElement('button')
  newEle.type = 'button'
  newEle.className = 'fas fa-sign-out-alt exit-readmode'
  $body.appendChild(newEle)
  
  function clickFn() {
    $body.classList.remove('read-mode')
    newEle.remove()
    newEle.removeEventListener('click', clickFn)
  }
  
  newEle.addEventListener('click', clickFn)
}
rmf.fullScreen = function () {
  const fullScreenText = document.getElementById('fullScreenText');
  
  if (!rmf.isFull) {
    // 获取页面元素
    const element = document.documentElement;
    
    // 判断浏览器是否支持全屏API
    if (element.requestFullscreen) {
      // 进入全屏
      element.requestFullscreen();
      
      // 在进入全屏时，将控制台内容隐藏
      console.clear(); // 清除控制台内容
      console.log("Entering fullscreen. Console content is cleared.");
    } else {
      console.error("Fullscreen API is not supported in this browser.");
    }
    
    rmf.isFull = true;
    fullScreenText.textContent = "退出全屏"; // 设置 span 内容
    
  } else {
    // 退出全屏
    if (document.exitFullscreen) {
      document.exitFullscreen();
      
      console.log("Exiting fullscreen.");
    } else {
      console.error("Fullscreen exit is not supported in this browser.");
    }
    
    rmf.isFull = false;
    fullScreenText.textContent = "进入全屏"; // 设置 span 内容
  }
}


//复制选中文字
rmf.copySelect = function () {
  document.execCommand('Copy', false, null);
  //这里可以写点东西提示一下 已复制
}

//回到顶部
rmf.scrollToTop = function () {
  document.getElementsByClassName("menus_items")[1].setAttribute("style","");
  //document.getElementById("name-container").setAttribute("style","display:none");
  btf.scrollToDest(0, 500);
}
rmf.translate = function () {
  document.getElementById("translateLink").click();
}
rmf.searchinThisPage=()=>{
  const searchTarget = document.querySelector('#algolia-search .search-dialog')
  searchTarget.style.display = 'block';
  // 获取搜索框元素
  const searchBoxInput = document.getElementsByClassName("ais-SearchBox-input")[0];
  // 设置搜索框的值为当前选中的文本
  searchBoxInput.value = window.getSelection().toString();
  // 模拟按下回车键的事件
  const enterKeyEvent = new KeyboardEvent('keyup', { key: 'Enter', keyCode: 13 });
  searchBoxInput.dispatchEvent(enterKeyEvent);
  //var evt = document.createEvent("HTMLEvents");
  //evt.initEvent("input", false, false);
  //document.getElementsByClassName("local-search-box--input")[0].dispatchEvent(evt);
}

document.body.addEventListener('touchmove', function(e){

}, { passive: false });
function popupMenu() {
  //window.oncontextmenu=function(){return false;}
  window.oncontextmenu = function (event) {
    if(event.ctrlKey||document.body.clientWidth<900) return true;
    $('.rightMenu-group.hide').hide();
    if (document.getSelection().toString()) {
      $('#menu-text').show();
    }
    if (document.getElementById('post')) {
      $('#menu-post').show();
    } else {
      if (document.getElementById('page')) {
        $('#menu-post').show();
      }
    }
    var el = window.document.body;
    el = event.target;
    var a=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
    if (a.test(window.getSelection().toString())&&el.tagName!="A"){
      $('#menu-too').show()
    }
    if (el.tagName == 'A') {
      $('#menu-to').show()
      rmf.open = function () {
        if(el.href.indexOf("http://")==-1&&el.href.indexOf("https://")==-1||el.href.indexOf("yisous.xyz")!=-1){
          pjax.loadUrl(el.href)
        }
        else{
          location.href = el.href
        }
      }
      rmf.openWithNewTab = function () {
        window.open(el.href);
        // window.location.reload();
      }
      rmf.copyLink = function () {
        let url = el.href
        let txa = document.createElement("textarea");
        txa.value = url;
        document.body.appendChild(txa)
        txa.select();
        document.execCommand("Copy");
        document.body.removeChild(txa);
      }
    }
    if (el.tagName == 'IMG') {
      $('#menu-img').show()
      rmf.openWithNewTab = function () {
        window.open(el.src);
        // window.location.reload();
      }
      rmf.click = function () {
        el.click()
      }
      rmf.copyLink = function () {
        let url = el.src
        let txa = document.createElement("textarea");
        txa.value = url;
        document.body.appendChild(txa)
        txa.select();
        document.execCommand("Copy");
        document.body.removeChild(txa);
      }
      rmf.saveAs=function(){
        var a = document.createElement('a');
        var url = el.src;
        var filename = url.split("/")[-1];
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      }
    } else if (el.tagName == "TEXTAREA" || el.tagName == "INPUT") {
      $('#menu-paste').show();
      // rmf.paste=function(){
      //     input.addEventListener('paste', async event => {
      //         event.preventDefault();
      //         const text = await navigator.clipboard.readText();
      //         el.value+=text;
      //       });
      // }
      rmf.paste = function () {
        navigator.permissions
          .query({
            name: 'clipboard-read'
          })
          .then(result => {
            if (result.state == 'granted' || result.state == 'prompt') {
              //读取剪贴板
              navigator.clipboard.readText().then(text => {
                console.log(text)
                insertAtCursor(el, text)
              })
            } else {
              Snackbar.show({
                text: '请允许读取剪贴板！',
                pos: 'top-center',
                showAction: false,
              })
            }
          })
      }
    }
    let pageX = event.clientX + 10;
    let pageY = event.clientY;
    let rmWidth = $('#rightMenu').width();
    let rmHeight = $('#rightMenu').height();
    if (pageX + rmWidth > window.innerWidth) {
      pageX -= rmWidth + 10;
    }
    if (pageY + rmHeight > window.innerHeight) {
      pageY -= pageY + rmHeight - window.innerHeight;
    }
    mask=setMask();
    window.onscroll=()=>{
      rmf.showRightMenu(false);
      window.onscroll=()=>{}
      if (mask) {
        // 判断 mask 是否有父节点
        if (mask.parentNode) {
          // 移除 mask 的父节点中的 mask
          mask.parentNode.removeChild(mask);
        } else {
          console.error("Mask does not have a parent node.");
        }
      }
    }
    $(".rightMenu-item").click(()=>{
      if (mask) {
        // 判断 mask 是否有父节点
        if (mask.parentNode) {
          // 移除 mask 的父节点中的 mask
          mask.parentNode.removeChild(mask);
        } else {
          console.error("Mask does not have a parent node.");
        }
      }
    })
    $(window).resize(()=>{
      rmf.showRightMenu(false);
      if (mask) {
        // 判断 mask 是否有父节点
        if (mask.parentNode) {
          // 移除 mask 的父节点中的 mask
          mask.parentNode.removeChild(mask);
        } else {
          console.error("Mask does not have a parent node.");
        }
      }
    })
    mask.onclick=()=>{
      if (mask) {
        // 判断 mask 是否有父节点
        if (mask.parentNode) {
          // 移除 mask 的父节点中的 mask
          mask.parentNode.removeChild(mask);
        } else {
          console.error("Mask does not have a parent node.");
        }
      }
    }
    rmf.showRightMenu(true, pageY, pageX);
    return false;
  };
  
  window.addEventListener('click', function () {
    rmf.showRightMenu(false);
  });
}
if (!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  popupMenu()
}
const box = document.documentElement

function addLongtabListener(target, callback) {
  let timer = 0 // 初始化timer
  
  target.ontouchstart = () => {
    timer = 0 // 重置timer
    timer = setTimeout(() => {
      callback();
      timer = 0
    }, 380) // 超时器能成功执行，说明是长按
  }
  
  target.ontouchmove = () => {
    clearTimeout(timer) // 如果来到这里，说明是滑动
    timer = 0
  }
  
  target.ontouchend = () => { // 到这里如果timer有值，说明此触摸时间不足380ms，是点击
    if (timer) {
      clearTimeout(timer)
    }
  }
}

addLongtabListener(box, popupMenu)
