 import _ from 'lodash';

// 动态代码分割的例子

// function getComponent() {
	////webpackChunkName是用于强制命名的样子。。。
//     return import (/* webpackChunkName: "myStyle"*/ './style.css').then(() => {
//       var element = document.createElement('div');
//        var btn = document.createElement('button');

//         element.innerHTML = _.join(['Hello', 'webpack11'], ' ');

//        btn.innerHTML = 'Click me and check the console!';

//        element.appendChild(btn);

//         return element;
//       }).catch((err) => {
//         err => "出错了!"
//       })
//   }
//   getComponent().then((component) => {
//   	document.body.appendChild(component);
//   })


// 使用async 方法写
async function getComponent() {
	var btn = document.createElement('button');
	var element = document.createElement('div');

    await import (/* webpackChunkName: "style"*/ './style.css');
	element.innerHTML = _.join(['Hello', 'webpack11'], ' ');
	 btn.innerHTML = 'Click me and check the console!';
     btn.onclick = getAsyncCSS;
     element.appendChild(btn);
	return element
}
 getComponent().then(component => {
    document.body.appendChild(component);
 });

 async function getAsyncCSS() {
 	await import (/* webpackChunkName: "asyncCSS"*/ './async.css'); 
 }