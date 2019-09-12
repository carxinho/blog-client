<template>
  <div id="create">
    <h1>创建博客</h1>
    <div class="textTitle">文章标题</div>
    <el-input type="text" placeholder="请输入内容" v-model="title" maxlength="30"></el-input>
    <p class="msg">{{title.length}}/30</p>
    <div class="textTitle">文章描述</div>
    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 6}" placeholder="请输入内容" v-model="description" maxlength="200"></el-input>
    <p class="msg">{{description.length}}/200</p>
    <div class="textTitle">文章内容</div>
    <el-input type="textarea" :autosize="{ minRows: 4}" placeholder="请输入内容" v-model="content" maxlength="10000"></el-input>
    <p class="msg">{{content.length}}/10000</p>
    <div class="submit">
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      <el-button class="submitButton" @click="onCreate">立即创建</el-button>
    </div>

  </div>
</template>

<style src="./style.less" lang="less"></style>

<script src="./template.js"></script>



