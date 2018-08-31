# 按钮组件

## Features

- 为了便于开发，提取为组件使用

## How to use

### Import

使用以下方式导入组件

```sh
   import h_button from '../../../../src/component/ui/button.vue';
```

### statement

在导入文件后在components中声明组件

```sh
   components: {
       h_button
    },
```

### use
直接以标签的形式引入组件,传入相应参数即可：
title表示按钮显示的值

```sh
    <h_button title="蛋白质水解"></h_button>

        data() {
            return {
               disabledSJ: false
            };
        },
```