# 习题布局

## Features

习题布局组件，基于题类微件共性所提取的布局。

主要特征有：

- 左侧为题类解析区域(宽度 38.2%)，右侧为内容区域(宽度 61.8%);
- 题干在顶部区域，层级最高;
- 默认第一次进入微件时题干铺满全屏，显示点击开始按钮，题干区域向上滑出，进入习题;
- 左侧解析区域可手动滑进屏幕内，题干也可从屏幕上方滑下;
- 解析区域的每一个步骤高度都大于等于屏幕高度，右侧内容区域随着解析区域的改变而改变;
- 当解析区步骤显示整屏高度的66%时，则显示当前解析步骤对应的内容;

<!-- ![习题组件](../images/xiti.gif) -->

## How to use

### Import

使用以下方式导入组件

```sh
  import exerciseLayout from '../../../../src/component/layout/exercise_layout.vue';
```

### statement

在导入文件后在components中声明组件

```sh
   components: {
      exerciseLayout
    },
```

### use

页面中直接以标签的形式引入组件,传入相应参数即可；
template标签内用来写内容区html

```sh
     <exerciseLayout v-bind="exerciseOption">
      <template slot="box" slot-scope="box">
        <div  id="box" style="width: 100%;height: 100%;display: flex">
            <div class="button_Image">
               <label for="checkbox-1" id="s1" class="control-block_div_border switch enableAnim" style="margin-top:10px;width: 200px;color:#000000">
                <input type="checkbox" name="checkbox-cats[]" id="checkbox-1" value="1" v-model="showImage" >
                <label for="checkbox-1">辅助图示</label>
              </label>
            </div>
            <div class="model_content">
                <div  id="3dModel" class="model3d_content transtaion_animation2" style="">

                </div>

                <div class="image1">
                    <img class="image_one" src="./sub_static/image1.png" style="" v-show="showImage"/>
                </div>

            </div>
        </div>
      </template>

    </exerciseLayout>
```

标签绑定的属性

```sh
  data() {
        return{
            exerciseOption: {
                exercise: {
                      question : {
                        title : '空间足球受力问题',
                        coverImage : questionCoverImg
                     },
                       stepArray : [
                                    { coverImage: analytic1Img , call: () => {
                                        if(this.currentIndex == 0){
                                            return ;
                                        }
                                        this.currentIndex = 0;

                                        (ViewController.getInstance().viewHandler as FootballViewHandler).gltf.hideObj();
                                        (ViewController.getInstance().viewHandler as FootballViewHandler).gltf.showObj3();

                                        if (this.resetCamera) {
                                            (ViewController.getInstance().viewHandler as FootballViewHandler).gltf.resetCamera();
                                            this.resetCamera = false;
                                        }
                                    }},

                                    { coverImage: analytic2Img , call: () => {

                                        if(this.currentIndex == 1){
                                            return ;
                                        }
                                        this.currentIndex = 1;
                                        (ViewController.getInstance().viewHandler as FootballViewHandler).gltf.hideObj();
                                        (ViewController.getInstance().viewHandler as FootballViewHandler).gltf.showObj1();
                                        (ViewController.getInstance().viewHandler as FootballViewHandler).gltf.showObj3();

                                        this.resetCamera = true;
                                    }},

                                    { coverImage: analytic3Img , call: () => {

                                        if(this.currentIndex == 2){
                                            return ;
                                        }
                                        this.currentIndex = 2;
                                        (ViewController.getInstance().viewHandler as FootballViewHandler).gltf.hideObj();
                                        (ViewController.getInstance().viewHandler as FootballViewHandler).gltf.showObj2();

                                        this.resetCamera = true;
                                    }},
                                ]
                },
                resizeCall: () => { (ViewController.getInstance().viewHandler as FootballViewHandler).moveDiv(); };
            }
        };
    },

```

## Attributes

### Exercise 习题对象

    //题目
    question: Questions;

    //步骤数组
    stepArray: Array<Step>;

    //当左侧解析拉入/拉出 整体页面resize时的回调
    resizeCall: Function;

### Questions  题干对象

    //标题
    title: string;

    //题干
    stem: string;

    //封面图
    coverImage: string;

    //自定义domid
    customDom: string;

### Step 步骤对象

    //解析的标题
    title: string;

    //解析内容
    analytic: string;

    //自定义解析内容 domid
    customDom: string;

    //封面图
    coverImage: string;

    //滑动到对应解析时的回调函数
    call: Function;