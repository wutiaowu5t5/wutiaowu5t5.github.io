/*
 * @Description: 网站置灰
 * @Author: 5t5
 * @Time: 2023/12/7 15:37
 */

function PublicSacrificeDay() {
  // 你想要置灰的特殊日子的日期
  let PSFarr = ["0226", "0403", "0512", "0707", "0918", "0930", "1213"];
  let currentDate = new Date();
  let mm = currentDate.getMonth() + 1;
  let dd = currentDate.getDate();
  
  let str = `${mm < 10 ? '0' : ''}${mm}${dd < 10 ? '0' : ''}${dd}`;
  
  return PSFarr.includes(str) ? 1 : 0;
}

function setGrayStyle() {
  document.getElementsByTagName("html")[0].setAttribute(
    "style",
    "filter: gray !important; filter: grayscale(100%); -webkit-filter: grayscale(100%); -moz-filter: grayscale(100%); -ms-filter: grayscale(100%); -o-filter: grayscale(100%);"
  )
}

if (PublicSacrificeDay()) {
  setGrayStyle()
}

