   # 关键帧动画组件

## Features

- 为了快速开发关键帧动画系列的微件,所开发的vue组件
  

## 属性
  - image
  - timeLineLength
  - zipUrl
  - imageNum
  - isInfinite
  - width
  - height
  - showSlider
  - timeLine
  - label
  - interval
  - animationName
  - playRange
 

## How to use

### Import

使用以下方式导入组件

```sh
  import keyFrameAnimation from '../../../../src/component/layout/keyFrameAnimation.vue';
```

### statement

在导入文件后在components中声明组件

```sh
   components: {
      keyFrameAnimation
    },
```

### use

#### 配置属性

```sh
    <keyFrameAnimation v-bind="animationOption">    
    </keyFrameAnimation>


data() {
        return {
            animationOption: {
                
            /*
            * 必传参数
            * 可以传入zip包或传入图片数组
            * */

            //传入图片数组所必须配置的参数

            //图片数组
            image: [],

            //时间轴的长度  , 在所有图片传入image后传入时间轴长度
            timeLineLength:0,

            //传入ZIP包所必须配置的参数

            //zip包路径
            zipUrl: require('./sub_static/part_hydrolysis.zip'),

            //图片的总数
            imageNum: 100,

            /*
            * 非必传参数
            * */
            //是否无限执行,默认为false
            isInfinite: true,

            //主内容区的宽高 ，默认为680*360
            width:680,
            height:360,

            //是否显示滑动条 ， 默认为true
            showSlider: false,

            //滑条上的点,如果传入该值也需要传入lable值
            timeLine: [0, 99],

            //点上的标签
            label: ['', ''],

            //动画执行的时间间隔,毫秒为单位
            interval: 80,

            //同一个项目多次调用组件需要传入name值
            animationName: 'sliderComponent',

            //播放某段动画所需要传入的范围数组，如[20, 50],是从第21帧播到第51帧
            playRange: [20,50],
        },
    }
}
```

#### 获取当前动画进度
```sh
  <keyFrameAnimation v-bind="animationOption" v-model="frameNum">    
  </keyFrameAnimation>
  
  data() {
        return {
            frameNum: 0
        }
    }
```
#### 方法

组件对外暴露了开始播放、暂停播放、重置以及刷新滑动条样式的方法，可以通过以下方式调用。
组件在同一个项目中被多次调用切换时会出现滑动条数值错误的情况，需要调用刷新方法。

```sh
  <keyFrameAnimation v-bind="animationOption" v-model="frameNum" ref="animationFunction">    
  </keyFrameAnimation>

  this.$refs.animationFunction.play();
  this.$refs.animationFunction.pause();
  this.$refs.animationFunction.reset();
  this.$refs.animationFunction.refresh();
```