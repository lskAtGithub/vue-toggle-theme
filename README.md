# sk-message-box

基于**Vue3**的主题切换，主要是实现之前很火的太阳月亮切换


### 安装
```
npm i toggle-theme-vue
```

### 使用示例
```
<script setup lang="ts">
import { ref } from 'vue'
import ToggleThemeVue from 'toggle-theme-vue'

</script>

<template>
  <ToggleThemeVue />
</template>

```

### 文档
##### 组件调用文档

| 属性      | 默认值 | 是否必填 | 说明 |
| ----------- | ----------- | ----------- | ----------- |
| size   | '18px' | 否 | toggle尺寸，接受px， 大小根据 em来调整 |

##### 方法
| name      | 说明 | 入参 |  返回值 |
| ----------- | ----------- | ----------- | ----------- |
| change | 切换主题时触发 | 'light' \| 'dark' | void |


