/*
 * @Description: 右下角分享按钮
 * @Author: 5t5
 * @Time: 2024/1/30 9:52
 */
// 分享本页
function share_() {
  let url = window.location.origin + window.location.pathname
  try {
    // 截取标题
    var title = document.title;
    var subTitle = title.endsWith("| Nanami Kento") ? title.substring(0, title.length - 14) : title;
    navigator.clipboard.writeText('Nanami Kento的站内分享\n标题：' + subTitle + '\n链接：' + url + '\n欢迎来访！');
    
    alert("成功复制分享信息🎉您现在可以通过粘贴直接跟小伙伴分享了！")
  } catch (err) {
    console.error( '复制失败！', err );
  }
}

// 防抖
function share() {
  debounce(share_, 300);
}