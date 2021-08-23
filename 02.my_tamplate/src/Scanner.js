export default class Scanner {
  constructor(templateStr){
    this.templateStr = templateStr //将模板字符串写到实例身上
    this.pos = 0 //定义一个指针
    this.tail = templateStr //尾巴 一开始就是模板字符串的原文
  }
  // 1.功能弱 路过指定的内容 无返回值
  scan(tag){
    if(this.tail.indexOf(tag) == 0){
      // 当尾巴的开头是0 已经扫描到tag的开始 tag有多长如{{长度是2，就让指针后移2位
      this.pos += tag.length
    }
  }

  // 2.指针进行扫描 遇到指定内容结束 且返回扫描过的值 stopTag停止扫描的字符
  scanUtil(stopTag){
    // 记录一下执行此方法时pos的值
    const pos_backup = this.pos


    // 当尾巴的开头不是stopTag的时候 就说明还没扫描到stopTag
    while(this.tail.indexOf(stopTag) != 0){
      this.pos++
      // 改变尾巴从当前指针这个字符开始，到最后的全部字符
      this.tail = this.templateStr.substring(this.pos)
    }
    return this.templateStr.substring(pos_backup,this.pos)
  }
}