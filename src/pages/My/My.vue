<template>
  <div id="my">
    <section class="user-info">
      <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="" class="avatar">
      <h3>Caddo</h3>
    </section>
    <section>
      <div class="item">
        <div class="date">
          <span class="day">6</span>
          <span class="month">9月</span>
          <span class="year">2019</span>
        </div>
        <h3>JS之继承（ES5 & ES6） </h3>
        <p>面试中最常会问到的问题：什么是继承？如何分别用 ES5 和 ES6 实现？想要学习继承，必须先学好原型与原型链，如果此部分还不清楚，请先学习此部分再来阅读本文，可参考我的文章JS之原型与原型链或浏览其他相关的学习网站...</p>
        <div class="actions">
          <router-link to="/edit">编辑</router-link>
          <a href="#">删除</a>
        </div>
      </div>

      <div class="item">
        <div class="date">
          <span class="day">20</span>
          <span class="month">5月</span>
          <span class="year">2019</span>
        </div>
        <h3>JS之闭包及其作用</h3>
        <p>闭包作为JS中的一大难点，相信许多小伙伴也常常为此疑惑，闭包到底是什么？它有什么用呢？</p>
        <div class="actions">
          <router-link to="/edit">编辑</router-link>
          <a href="#">删除</a>
        </div>
      </div>

    </section>
  </div>
</template>

<script src="./template.js"></script>

<style src="./style.less" lang="less"></style>
