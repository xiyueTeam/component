# 左右布局组件

## Features

- 为了快速布局,所开发的布局组件

## How to use

### Import

使用以下方式导入组件

```sh
  import leftAndRightLayout from '../../../../src/component/layout/leftAndRightLayout.vue';
```

### statement

在导入文件后在components中声明组件
如果需要使用320宽度的控件区需要传入
一个属性 widthClass: 'w320' 

```sh
   components: {
      leftAndRightLayout
    },
```

### use
直接以标签的形式引入组件,并绑定对应的name及id,进行重写,
3dContainer为主内容区,controlPanel为控件区
```sh
    <leftAndRightLayout>
            <template slot="viewBox" slot-scope="viewBox">
                <div id="3dContainer">
                  <!--  Core code -->
                </div>
            </template>
            <template slot="controlPanel" slot-scope="controlPanel">
                <div id="controlPanel">
                 <!--  Core code -->
                </div>
            </template>
    </leftAndRightLayout>
    
```

使用320宽度的控件区
```sh
  <leftAndRightLayout  v-bind="layoutOption">
            <template slot="viewBox" slot-scope="viewBox">
                <div id="3dContainer">
                  <!--  Core code -->
                </div>
            </template>
            <template slot="controlPanel" slot-scope="controlPanel">
                <div id="controlPanel">
                 <!--  Core code -->
                </div>
            </template>
    </leftAndRightLayout>



    data() {
        return {
            layoutOption: {
                widthClass: 'w320'
            },
        }
    }
```

