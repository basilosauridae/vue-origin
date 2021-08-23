import Scanner from './Scanner.js'

window.my_tamplate = {
  render(templateStr,data){
    // console.log('render函数被调用，我们要命令Scanner工作')//webpack是热更新 js中变动 页面同时改变

    /* 实例化扫描器 构造函数时提供一个参数 这个参数就是模板字符串 
       即这个扫描器就是针对此模板字符串工作*/
    var scanner = new Scanner(templateStr)
    console.log(templateStr)
    var words = scanner.scanUtil("{{")
    console.log(scanner.pos,'至{{停止扫描的下标')
    console.log(words,'至{{停止扫描截取返回的文字')
  }
}