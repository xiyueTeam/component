# 3d模型动画组组件

## Features

- 用来解决模型多组，动画的切换


## How to use
### import

使用以下方式导入组件

```sh
  import ModelAnimationGroup from '../../../../src/three/component/ModelAnimationGroup';
```


### use

```sh

const jt: any = await this.gltfLoader(WKGltf as any);
        jt.scene.traverse((child: any) => {
            if (child instanceof Scene) {
                this.model = child;
                this.model.scale.set(1, 1, 1);
                this.model.position.set(0, -60, 0);
                this.scene.add(this.model);
            }
});
this.modelAnimatin = new ModelAnimationGroup(jt);
(window as any).viewHandler.viewModel.$data.modelAniamtionGroup = this.modelAnimatin.getAnimationGroupNum();
this.modelAnimatin.playAnimation(3);

```
## parameter
### model 
- **必传参数** - 模型，

### animation 
- **非必传参数** - 动画组

### mixer
- **非必传参数** - 动画混音器

### actionArry
- **非必传参数** - 动画播放器 

### clock
- **非必传参数** - 动画时钟


## method
1. playAnimation(val: number)  参数val：表示模型第几组动画

    播放模型动画

2. pauseAnimation(val: number)  参数val：表示模型第几组动画 

    暂停模型动画

3. resetAnimation()

    重置模型动画

4. setAnimationDoubleSpeed(val: number, timescale: number)  
    参数 val：表示模型第几组动画    timescale ： 表示时间缩放因子

    设置模型动画倍速

5. switchAniamtion(val: number) 参数val：表示模型第几组模型动画

    切换模型动画组动画

6. renderModel()

    在render函数中使用

7. getAnimationGroupLength() 返回值类型 number

    获取模型动画组长度

8. getAnimationGroupArray() 返回值类型 Array

    获取模型动画组动画




