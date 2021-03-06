---
# theme: seriph
background: /assets/imgs/back.jpeg
class: text-center
highlighter: shiki
lineNumbers: true
canvasWidth: 1740
drawings:
  persist: false
title: tailwindcss
---

# Tailwindcss

---
class: text-center flex flex-col justify-center
highlighter: shiki
background: /assets/imgs/back.jpeg
---

# what is tailwindcss?

<p v-click class="block" >Tailwind CSS 是一个高度可定制的基础层 CSS 框架，它提供了构建定制化设计所需的所有构建块，而无需重新覆盖任何内建于框架中的设计风格。</p>

<p v-click class="block" > 简而言之 <b>tailwindcss</b> 其实就是一个高度可定制的原子化css框架。</p>

---

# 与原子化CSS相处的一年半（https://johnpolacek.medium.com/by-the-numbers-a-year-and-half-with-atomic-css-39d75b1263b4）
<v-click>

1. 2013–07–23

  提交数:<span class="text-green-300">575</span>、 仓库大小:<span class="text-green-300">445MB</span>、css文件大小:<span class="text-red-400">109.4kb* (41 css files)</span>
  
</v-click>

<v-click>

2. 2013–09–03

>  在项目中实施响应式网页设计，使得项目布局就能适应所有的屏幕尺寸

  提交数:<span class="text-green-300">925</span>、 仓库大小:<span class="text-green-300">465MB</span>、css文件大小:<span class="text-red-400">123.1kb (41 css files)</span>
  
</v-click>
<v-click>

3. 2013–09–07 
> 将css文件合并为一个文件，减少请求http请求，对css文件进行缓存

提交数:<span class="text-green-300">1500</span>、 仓库大小:<span class="text-green-300">467MB</span>、css文件大小:<span class="text-red-400">105.6kb (1 file)</span>

</v-click>
<v-click>

4. 2014–09–15 
> 随着时间的推移，项目添加了更多功能，例如集成票务、响应式赞助广告单元、仪表板报告和一些其他功能。项目中 CSS 继续增长。

提交数:<span class="text-green-300">4812</span>、 仓库大小:<span class="text-green-300">482MB</span>、css文件大小:<span class="text-red-400">151.2kb</span>

</v-click>
<v-click>

> 从上面可以看到，使用传统的语义 CSS 方法一年后，项目的 CSS 增长了 43%，而 仓库 大小增长了 3%

</v-click>

<v-click>

5. 2015–05–06 
> 在接下来的几个月里，除了常规的产品开发外，我们公司还进行了品牌重塑。我们产品的外观和感觉取得了飞跃，但我们的核心 CSS 继续增长。

提交数:<span class="text-green-300">7726</span>、 仓库大小:<span class="text-green-300">485MB</span>、css文件大小:<span class="text-red-400">183.2kb</span>

</v-click>

---

<v-click>

6. 2015–10–09
> 项目的 CSS 以不可持续的速度增长。我剔除未使用的样式，尽可能优化。我将管理风格与我们面向客户的核心产品分开。到 10 月，已经取得了一些进展

提交数:<span class="text-green-300">9692</span>、 仓库大小:<span class="text-green-300">487MB</span>、css文件大小:<span class="text-red-400">116.8kb</span>

</v-click>

<v-click>

> 不错，但我想低于 100kb。我查看了我们的css代码，一遍又一遍地看到相同的属性声明。因此我研究`原子化css`,并在项目中落地。

</v-click>

<v-click>

7. 2015–10–18
> 将我们的 CSS 重构为`原子化css`使得`css`大小减少了 <b class="text-green-400">30%</b>,它本来可以更小，但我们留下了一些遗留样式以供以后重构。

提交数:<span class="text-green-300">9830</span>、 仓库大小:<span class="text-green-300">491MB</span>、css文件大小:<span class="text-red-400">81.3kb</span>

</v-click>

<v-click>

8. 2017–05–30
> 一年半之后，尽管每两周发布一次新特性和功能，但随着我们逐步淘汰旧样式，我们的 CSS 实际上不仅没有增加，而且还缩小了 10%。

提交数:<span class="text-green-300">20257</span>、 仓库大小:<span class="text-green-300">593MB</span>、css文件大小:<span class="text-red-400">72.7kb</span>

</v-click>

<img class="mt-4 h-80" v-click src="/assets/imgs/css_grow.png"/>

---

<v-click>

# 为什么一年半之后项目的CSS文件不升反降呢？

</v-click>
<v-click>

> 例如，我们添加了一个新功能，座位管理，它允许我们的客户将客人拖放到他们活动的餐桌分配中。这是一个带有新 UI 的新视图。没有新的 CSS。我们的设计系统已经有了我们需要的样式，而我们之前的功能已经使用到了这些css，所以我们编写这个功能并没有增加新的CSS代码

</v-click>

<img v-click class="mt-4" src="/assets/imgs/feature.gif"/>



---

<Card/>




<div grid="~ cols-2 gap-2" m="-t-2">

<div>
<v-click>

<h3>传统方式</h3>

```html
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
```
</v-click>

</div>

<div>

<v-click>

<h3>tailwindcss</h3>

```html
<div class="flex items-center max-w-sm p-6 mx-auto space-x-4 bg-white shadow-lg rounded-xl">
  <div class="shrink-0">
    <img class="w-12 h-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
```

</v-click>
</div>

</div>


<style>
  pre.shiki-container{
    @apply mt-3;
    max-height:400px;
    overflow:scroll;
  }
</style>

---
layout: iframe
# the web page source
url: http://localhost:3000/hero

---

---

<v-click>

- 🤔 **不再需要浪费精力去起类名** - 不再需要先起个`sidebar-inner-wrapper`类名再去编写样式。也不再需要为实际上只是一个 flex 容器的东西去想一个完美抽象名称而苦恼。

<br/>
</v-click>
<v-click>

- 🛑 **CSS文件将停止增长** - 传统方式下、每次新增功能时，CSS文件体积都会增大。而使用`原子化CSS`所有的class都将被复用。

<br/>

</v-click>
<v-click>

<img class="mb-4 h-80" src="/assets/imgs/grow.png"/>

</v-click>
<v-click>

- ⛑ **更改样式更加安全** - 传统方式下修改样式需要注意是否会影响其他组件，而`原子化css`就是在当前元素上添加/移除class，影响范围仅限在当前组件。

</v-click>

<v-click>

<!-- - ⛑ **在设计规范下约束样式编写** - 使用tailwindcss是从一个预定义的设计系统中选择样式，这使开发人员更容易建立视觉上一致的UI，新人总容易弄出一种大红大绿的新人风格网页，有了一些约束就很难出现这种很糟糕的色彩控制,另外，有了 text-lg 此类，一个页面上就不会出现几十种参差不同的字体大小 -->

</v-click>

<br>
<br>

---
class: flex items-center justify-center
---

# why tailwindcss

---
layout: iframe
# the web page source
url: http://localhost:3000/design

---

---
layout: iframe
# the web page source
url: http://localhost:3000/custom

---

---
layout: iframe
# the web page source
url: http://localhost:3000/editor

---

---
layout: iframe
# the web page source
url: http://localhost:3000/responsive

---

---
layout: iframe
# the web page source
url: http://localhost:3000/darkmode

---

---
layout: iframe
# the web page source
url: http://localhost:3000/opt

---
