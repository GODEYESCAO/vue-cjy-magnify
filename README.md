<!--
 * @Author: CJY
 * @Date: 2020-06-29 16:42:18
 * @LastEditTime: 2020-06-30 08:39:30
 * @LastEditors: CJY
 * @Description: 
--> 
# vue-cjy-magnify
## 安装
```
- npm i -S vue-cjy-magnify
- cnpm i -S vue-cjy-magnify

```

## 实现功能
```
- 实现了图片放大镜功能
- 只适用于vue

```
### 使用方法  

#### main.js 组件全局引入
```
import Vue from 'vue'
import cjyMagnify from 'vue-cjy-magnify'
Vue.component('cjy-magnify', cjyMagnify)
```

#### 使用文件中
```html
<cjy-magnify :width="width" :url="url" :type="type" :scale="scale" />
```

| 参数     | 说明             |  类型     | 可选值              | 默认值|
| -------- | -----  | ----  |  ----  | ----  |
| width    | 当前放大镜宽度   | Number   |                      |  268 | 
| url      | 图片URL          |   String  |                   |  |
| type     |   更换放大镜类型 |   String  | 'circle', 'square' | circle |
| scale    |    放大倍数      |  Number  |                     | 3 |

## 后续

后面会陆续添加各种功能