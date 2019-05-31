<template>
  <div class="box">
    <div class="left">
      <h2>描述</h2>
      <p>这一块主要用于d3的学习！</p>
      <ul>
        <li v-for="item of menus" :key="item.name">
          <router-link :to="item.to">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>
<style src="./D3.css" scoped></style>
<script src="./D3.js"></script>
