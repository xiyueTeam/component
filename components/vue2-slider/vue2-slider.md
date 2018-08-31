# 滑条组件

## Features

- 为了便于开发，提取为组件使用

## How to use

### Import

使用以下方式导入组件

```sh
  import vueSlider from '../../../../src/component/ui/vue2-slider.vue';
```

### statement

在导入文件后在components中声明组件

```sh
   components: {
      vueSlider
    },
```

### use
直接以标签的形式引入组件,传入相应参数即可：
sliderNumber为滑条的实时值，设置为45表示初始滑条值为45，
sliderOption表示滑条的显示样式.


```sh
    <vue-slider ref="slider" v-model="sliderNumber" v-bind="sliderOption">
    </vue-slider>

        data() {
            return {
                sliderNumber: 45,
                sliderOption: {
                    width: "100%",
                    min: 0,
                    max: 360,
                    piecewise: false,
                    tooltip: 'always',
                    piecewiseLabel: false,
                    speed: 0,
                    piecewiseStyle: {
                        "backgroundColor": "#FFFFFF",
                        "visibility": "visible",
                        "width": "24px",
                        "height": "24px"
                    },
                    piecewiseActiveStyle: {
                        "backgroundColor": "#5CAEFD"
                    }
                },
            };
        },
```