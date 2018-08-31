## 可设置线宽的线条组件使用说明

- 属性
    - startPoint：THREE.Vector3
    - endPoint：THREE.Vector3
    - color：any
    - lineWidth：number
    - dashLine：boolean
    - dashSize：number
    - gapSize：number
    - depthTest：boolean

## Use
```sh
    const line = new Line();

        // 画线
        const lineMesh = line.createLine({
            startPoint: new THREE.Vector3(75, 0, 0),
            endPoint: new THREE.Vector3(-75, 0, 0),
            lineWidth: 3000,
            color: '#1ACEFF',
        });

        this.scene.add(lineMesh);

```


## startPoint
- **必传参数** 起始点的坐标

## endPoint
- **必传参数** 终止点的坐标

## color
- **非必传参数** 线条的颜色默认颜色为'#000000'

## lineWidth
- **非必传参数** 线条的宽度默认为1

## dashLine
- **非必传参数** 是否是虚线（默认为false）

## dashSize
- **非必传参数** 破折号（-）的大小。默认为5

## gapSize
- **非必传参数** 间隙的大小。默认为5

## depthTest
- **非必传参数** 深度测试
