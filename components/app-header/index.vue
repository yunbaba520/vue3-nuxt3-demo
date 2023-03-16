<template>
  <div class="app-header">
    <div class="wrapper content">
      <div class="left">
        <NuxtLink to="/" class="link">
          <span> OPPO 官网</span>
        </NuxtLink>
        <NuxtLink to="/" class="link">
          <span>一加官网</span>
        </NuxtLink>
      </div>
      <div class="right">
        <NuxtLink to="/" class="link download">
          <span>下载 OPPO 商城 App</span>
          <div class="app">
            <img class="ecode" src="@/assets/image/ecode.png" alt="" />
            <div class="name">扫码下载 OPPO 商城 App</div>
          </div>
        </NuxtLink>
        <NuxtLink to="/" class="link">
          <span>登录</span>
        </NuxtLink>
        <NuxtLink to="/" class="link">
          <span>注册</span>
        </NuxtLink>
        <NuxtLink to="/" class="link">
          <span>购物车（0）</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app-header {
  width: 100%;
  height: $appHeaderHeight;
  @include elementSticky();
  background-color: #222222;
  .content {
    height: 100%;
    padding: 8px;
    box-sizing: border-box;
    @include normalFlex();
    .left {
      @include normalFlex(row, flex-start);
      align-items: center;
      .link {
        color: #fff;
        font-size: 12px;
        margin-right: 24px;
        text-decoration: none;
        cursor: pointer;
      }
    }
    .right {
      @include normalFlex(row, flex-start);
      align-items: center;
      .link {
        color: #fff;
        font-size: 12px;
        padding: 0 14px;
        text-decoration: none;
        cursor: pointer;
        border-right: 1px solid #fff;
      }
      .link:last-child {
        padding-right: 0;
        border-right: none;
      }
      .download {
        position: relative;
        .app {
          display: none;
          position: absolute;
          top: 25px;
          left: 0;
          padding: 10px;
          z-index: 10000;
          box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
          .ecode {
            width: 140px;
            height: 140px;
          }
          .name {
            color: #888;
            margin-top: 2px;
            white-space: nowrap;
          }
        }
        &:hover{
          .app {
            display: block;
          }
        }
      }
    }
  }
}
</style>
