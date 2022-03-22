<template>
<pre>
参考地址：https://juejin.cn/post/7062604488959328263（RSA加密：Web前端登录账户密码加密传输）
参考地址：https://juejin.cn/post/7011306453373812744（前端常用的几种加密方法）
参考地址：https://juejin.cn/post/7048800122448117797（不同角色权限展示页面）
<h5>一.加密，编译和非对称加密</h5>
-------考虑到性能和安全性不太高选择md5，否则在选RSA非对称加密--------
1. 伪加密（md5，base64）
 md5: 散列算法不可逆
 base64：编码方式
 前端为了传入的内容不明显可以借用着这两种方式，来掩盖原信息（加密方式：对称加密和非对称加密 还有哈希算法）
2. RSA 非对称加密（Web前端登录账户密码加密传输）
 1）一般对web网站安全性不是很高的话，一般的https协议就可以了，但是在这种情况下存在一个安全性问题，密码明文传送显然不是安全的，
 如果在请求传输的过程中数据被劫持了，就可以拿着明文密码和用户名登陆了，还有一种情况比如手机号+验证码算是一种比较安全的登陆，但是验证码有一定的有效期
 如果在被传送的时候劫持了，就可以拿着明文的手机号+验证码登陆，为了安全我们需要对传输的数据进行RSA加密
 
 2）实现加密思路：
 编写加解密公共方法类-->公钥方法-->前端在向后台发起登录请求之前，先请求后台获取公钥的方法，然后经过加密之后再发起登录请求-->
 前端代码需引入jsencrypt.min.js文件-->后端接收前端传输过来的密文进行解密-->完成登录

 3）什么是RSA？
  RSA算法是一个非对称的加密方式（即加密，解密的密钥不同），通常会生成两把密钥分别是公钥（公开），私钥（保密）
 4）加密/解密过程
  公钥放在前端对密码和用户名称加密--》发送给后端——〉私钥放在后端，后端用私钥解密
  <img src="./image/5.png" style="width: 40%" />
 5)RSA2048
  RSA的密钥越长越难破解，如果需要更高级的安全可以选择4096
 6）生成密钥（在线生成）http://web.chacuo.net/netrsakeypair ，生成之后分别存为两个文件pub.key, pri.key
 7) 前端加密
  安装加密工具 ——》npm install jsencrypt --save
  import { JSEncrypt } from 'jsencrypt'
  // 新建JSEncrypt对象
  const encryptor = new JSEncrypt() 
  // 设置公钥
  encryptor.setPublicKey(publicKey) 
  export const encrypt(data) {
      // 对需要加密的数据进行加密
      return encryptor.encrypt(data)
  }
  8）Java端解密

<h5>二.前端如何根不用角色做权限控制</h5>
 前端在角色权限更多的职责则是用户交互体验方面，比如访问无权限的页面，访问需要登陆的页面，都需要前端做交互页面401，403，404界面
 1）角色权限控制流程 --》 前端展示无需登陆的界面（登录页，注册页）--》登陆后拿到对应用户数据放入系统展示出来对应的列表
 2）登录权限控制 --》 角色权限控制 --》内容权限控制
  》登录权限控制
    无需就是登陆之前访问页面和登陆之后访问页面，有两种方式
    1. 将无需登陆的页面放在一个页面中的数组中，然后用export default nologinArray,在router.js引入，[...] 放入到 routes数组中
    <img src="./image/6.png" style="width: 40%" />
    2. 也可在路由对象中以添加meta的方式去实现登录页面权限控制
    <img src="./image/7.png" style="width: 40%" />
  》角色权限控制
   角色配置设置
   export const permission = {
     member:["Home"], //普通成员
     admin:["Home" ,"Notify"],  // 管理员（包含了普通管理员的权限）
     super_admin:["Home" ,"Notify","Manage"]  // 超级管理员（包含了所有的权限）
   }
  普通成员拥有首页权限，管理员拥有首页、通知权限，超级管理员则还额外拥有管理的权限
  有两种方式分别是前端控制权限和后端控制权限
  前端控制权限：登陆后后端返回一个角色，需要前端去路由表中查询出来，（如果产品需要添加一个角色，前端需要动大量的文件，不够灵活）
  后端控制权限：登陆后直接返回对应角色的列表，前端直接加载出来（最优方式）

  》内容权限控制













<h5>一. 前后端分离用户jwt用户验证</h5>
 1. 传统方式
 用户登录发送服务器 -》 后端根据用户信息生成一个token，保存这个token和用户id到数据库 -》接着把token返回，存入浏览器cookie中 -》之后的请求中会自动带上cookie中的token
 -》 后端根据这个cookie中token来查用户信息，验证是否过期 
 这种方式会出现很多问题比如：
 XSS攻击用户可以通过js获取cookie（我们可以设置httponly避免js读取）--》设置secure，cookie只允许https协议传输 --》httpOnly 选项使得 JS 不能读取到 cookie
 但是引来了另外一个问题CSRF的攻击，利用用户身份去去做一些操作
 2. jwt加密方式
 1）用于通信双方之间已json对象的形式安全传递信息方法，jwt可以使用HMAC算法或者是RSA 公钥 密钥进行签名
 2）两个特点：
  》可以通过url，post参数，http header发送，因为数量小，传送速度快
  》自己包含了用户的所有信息，避免了多次查询数据库
 3）jwt组成（header头部+payload负载+sign签名）三个部分组成
  》header头部（包含了jwt类型和采用的加密算法 {"alg": "HS256","typ": "JWT"}）
   会使用base64编码组成jwt结构的一部分（base64一种编码，可以被翻译回原来的样子，它并不是加密过程）
  》payload负载
   这部分就是我们存放信息的地方，你可以把用户id信息等存放在这里，jwt规范对这部分做了详细的介绍常用的由 iss（签发者），exp（过期时间），sub（面向的用户），aud（接收方），iat（签发时间）
   {
    "iss": "lion1ou JWT",
    "iat": 1441593502,
    "exp": 1441594722,
    "aud": "www.example.com",
    "sub": "lion1ou@163.com"
  }
  同样的，它会使用 Base64 编码组成 JWT 结构的第二部分
  》sign签名
  前面两部分都是使用 Base64 进行编码的，即前端可以解开知道里面的信息，sign需要使用编码后的header和payload以及我们提供的一个密钥
  然后使用 header 中指定的签名算法（HS256）进行签名。签名的作用是保证 JWT 没有被篡改过
  三个部分通过.连接在一起就是我们的 JWT 了，它可能长这个样子，长度貌似和你的加密算法和私钥有关系。
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3ZmVmMTY0ZTU0YWY2NGZmYzUzZGJkNSIsInhzcmYiOiI0ZWE1YzUwOGE2NTY2Z
  Tc2MjQwNTQzZjhmZWIwNmZkNDU3Nzc3YmUzOTU0OWM0MDE2NDM2YWZkYTY1ZDIzMzBlIiwiaWF0IjoxNDc2NDI3OTMzfQ.PA3QjeyZSUh7H0Gf
  E0vJaKW4LjKJuC3dVLQiY4hii8s


  
</pre>
</template>