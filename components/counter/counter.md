# 计数器组件

## Features

- 为了快速开发微件,所开发的计数器组件

## Attributes
- counterNum 计数器的总个数
- countDisabled 计数器的初始个数

## functions
- counterPlus()  计数器+1的方法
- counterLess()  计数器-1的方法
- reset()        重置计数器的方法
## How to use

### Import

使用以下方式导入组件

```sh
  import counter from '../../../../src/component/ui/counter.vue';
```

### statement
导入组件后声明组件

```sh
   components: {
      counter
    },
```

### use
直接以标签的形式引入组件，并配置参数
```sh
   <counter v-bind="counterOption"  ref="countTest" v-model="num"></counter>
```

配置需要的参数，如果不传有默认值
```sh
data() {
            return{
                num: 0,
                counterOption:{
                    counterNum: 5,    //默认值为4
                    countDisabled: 0  //默认值为0
                }
            };
        }
```
调用组件内的方法
```sh
(this.$refs.countTest as any).counterPlus();
(this.$refs.countTest as any).counterLess();
(this.$refs.countTest as any).reset();
```
