/*
 * @Description: 移动端阅读模式隐藏侧边栏
 * @Author: 5t5
 * @Time: 2024/1/30 17:21
 */

// 获取要观察的目标元素
const targetNode = document.body;

// 创建一个 Mutation Observer 实例并指定回调函数
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      const updatedBodyClassNames = mutation.target.className;
      const target = document.querySelector('#fixedcard-dashboard');
      
      if (!target) {
        return; // 如果找不到目标元素，直接返回
      }
      
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      console.log( isMobileDevice, 'isMobileDevice' )
      if (isMobileDevice) {
        const shouldHide = updatedBodyClassNames.includes('read-mode');
        
        target.style.display = shouldHide ? 'none' : 'block';
        
        if (shouldHide) {
          console.log(1111);
          target.style.setProperty('display', 'none', 'important');
        }
      } else {
        console.log('设备不在移动端');
      }
      
      // 在这里执行你希望进行的操作
    }
  }
});

// 配置观察选项（监视属性变化）
const config = { attributes: true };

// 开始观察目标节点
observer.observe(targetNode, config);