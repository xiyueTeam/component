# 轮盘组件

## Features

- 为了便于开发，提取为组件使用

## How to use

### Import

使用以下方式导入组件

```sh
  import seletIos from '../../../../src/component/ui/select.vue';
```

### statement

在导入文件后在components中声明组件

```sh
   components: {
      seletIos
    },
```

### use
直接以标签的形式引入组件,传入相应参数即可：
其中listData为轮盘显示值的集合，
month为轮盘显示默认值，
type为轮盘显示样式，'cycle'表示轮盘为滚轮样式，'line'表示轮盘为线性样式，默认为'line',
parameter1为轮盘拨动的加速度，默认为1.8.

```sh
   <selet-ios :listData="listData" v-model="month" type="cycle" v-bind="selectParameter" ref="spin">
   </selet-ios>

        data() {
            return {
                listData: Array.from({length: 19}, (value, index) => -9 + index),
                month: 7,

                selectParameter: {
                    parameter1: 2,
                },
            };
        },
```