<template>
  <div id="detail">
    <section class="user-info">
      <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="" class="avatar">
      <h3>JS之闭包及其作用</h3>
      <p><router-link to="/user">Caddo</router-link> 发布于3天前</p>
    </section>
    <section class="article">
      <h1 id="css-前言">前言</h1>
      <p>闭包作为JS中的一大难点，相信许多小伙伴也常常为此疑惑，闭包到底是什么？它有什么用呢？</p>
      <h1 id="css-变量作用域">变量作用域</h1>
      <p>在学习闭包之前，你必须清楚知道JS中变量的作用域。</p>
      <p>
        JS中变量的作用域无非就全局变量和局部变量，两者之间的关系是函数内部可以直接访问全局变量，但是函数外部是无法读取函数内部的局部变量的。
      </p>
      <h1 id="css-闭包的诞生">闭包的诞生</h1>
      <p>在很多时候，我们想要获取函数的局部变量，但是上述我们已经说过了，正常情况下，这是没办法的，于是，闭包就诞生了。</p>
      <pre><code class="lang-javascript">
        !function(){
          var n = 1
          function f2(){
          alert(n)//1
          }
        }
      </code></pre>
      <p>如上述代码所显示，闭包是需要函数套函数，其实只是因为我们需要局部变量，否则此变量就会变成全局变量，无法隐藏。而return 一个函数，只是因为让外部能使用这个闭包，也就是上述的bar函数。</p>
      <h1 id="css-闭包的定义">闭包的定义</h1>
      <p>说了这么多，闭包到底是什么？闭包其实就是「函数」和「函数内部能访问到的变量」（也叫环境）的总和。</p>
      <h1 id="css-闭包的作用">闭包的作用</h1>
      <ul>
        <li>可以间接调用函数内部的局部变量。</li>
        <li>可以让这些变量的值始终保持在内存中。（因此要注意不能滥用闭包）</li>
        <li>可以暂存数据,给变量开辟私密空间,避免外部污染。</li>
      </ul>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style src="./style.less" lang="less"></style>
