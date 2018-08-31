## 棱锥、棱台、棱柱展开动画组件使用说明

- 属性
    - topRadius
    - bottomRadius
    - height
    - segment
    - lineColor
    - planColor
    - animationTime

- 方法
    - startAnimation： 开始动画
    - reverseAnimation：反转动画
    - resetAnimation：重置动画


## topRadius
- **必传参数** 设置上底面半径（此半径是上底面每个边的中心距离原点的半径）

## bottomRadius
- **必传参数** 设置下底面半径（此半径是下底面每个边的中心距离原点的半径）

## height
- **必传参数** 设置模型的高度

## segment
- **必传参数** 设置上下底面的边数（如：上下底面半径相同设置为3就是三棱柱）

## lineColor
- **非必传参数** 设置边框线条的颜色，默认颜色是'#4A90E2'

## planColor
- **非必传参数** 设置模型的颜色，默认颜色是'#CFEAF8'

## animationTime
- **非必传参数** 设置动画持续时间，默认时间是3秒
