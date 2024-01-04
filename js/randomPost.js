/*
 * @Description: 随机跳转一篇文章
 * @Author: 5t5
 * @Time: 2024/1/4 16:28
 */
function randomPost() {
  fetch('/baidusitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
    let ls = data.querySelectorAll('url loc');
    while (true) {
      let url = ls[Math.floor(Math.random() * ls.length)].innerHTML;
      if (location.href === url) continue;
      console.log( url, 'url' )
      location.href = url;
      return;
    }
  })
}
