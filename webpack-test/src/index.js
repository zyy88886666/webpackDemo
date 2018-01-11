 import _ from 'lodash';

import './style.css'
import {printMe} from './print.js'; //  只引用了printMe整个方法，另外一个没有用
  function component() {
    
    var element = document.createElement('div');
   var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack11'], ' ');

   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;

   element.appendChild(btn);

    return element;
  }

  // document.body.appendChild(component()); //--写到html页面
  // 
  // 进行局部更新 -- 因为printMe是绑到element上面额的，如果print发生变化，理所应当需要重新渲染整个页面
  let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
  document.body.appendChild(element);

  if (module.hot) {
    // 使用
    module.hot.accept('./print.js', function() {
     console.log('表示局部刷新，整个页面不用刷新');
     document.body.removeChild(element); 
     element = component(); // 重新渲染页面后，component 更新 click 事件处理
     document.body.appendChild(element);
    })
  }