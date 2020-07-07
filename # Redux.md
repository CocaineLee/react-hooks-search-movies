# Redux
## What is it?
![basic](Document/redux.drawio.png)
![advance](Document/redux-advance.drawio.png)

## How to use it
### 初始阶段

1. 定义action
2. 创建actionCreator
3. 创建reducer（纯函数，每次讲旧的state merge后返回新的对象）
4. createStore
5. 通过provider把store传入上层组件
---
### 使用阶段

1. 创建action
2. dispatch action
3. subscribe state
4. 对于使用了react-redux的：参考connect方法
---
### 中间件

applyMiddlewares()  [thunk](https://github.com/reduxjs/redux-thunk/blob/master/src/index.js) 传参数顺序会影响表现
## How to connect Redux with React ---- React-Redux
### Connect()
`function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)`

- `mapStateToProps?: (state, ownProps?) => Object`: 接收两个参数，第一个state，第二个props。在每次store的产生变化的时候调用，state为store的state，props为wrapper后component的props 。
- `mapDispatchToProps?: Object | (dispatch, ownProps?) => Object` 
