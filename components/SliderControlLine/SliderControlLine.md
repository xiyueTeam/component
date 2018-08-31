# SliderControlLine

SliderControlLine类文档使用说明

## Contents

- [SliderControlLine](#SliderControlLine)
	- [Contents](#contents)
	- [Import](#import)
    - [Attributes](#attributes)
    - [Methods](#methods)
	- [How to use](#how-to-use)


## import
导入类  
import SliderControlLine

## Attributes
属性
1.  sliderPoint  
    滑点
2.  controlPoint  
    控点 
3.  line  
    直线
4.  lastPointX    
    滑点鼠标按下或触摸开始的X坐标
5.  lastPointY    
    滑点鼠标按下或触摸开始的Y坐标
6.  currentPointX    
    滑点当前移动X坐标
7.  currentPointY    
    滑点当前移动Y坐标
8.  imgControl  
    滑点控制器
9.  angle  
    直线旋转角度  
10. dragControls  
    注册控点拖拽对象
11. domWidth  
    dom宽度
12. domHeight  
    dom高度

 
## Methods
主要方法 
1. initSliderPointTouchEvent()    
用来初始化滑点的触摸事件

2. initControlPointDragEvent()  
用来初始化控点的拖拽事件

3. initSliderPointMouseEvent()  
用来初始化滑点的鼠标事件  

## How to use
在使用处创建一个SliderControlLine对象

例如
const sliderControlLine = new SliderControlLine(line, sliderPoint, controlPoint);


