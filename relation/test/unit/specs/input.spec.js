import Vue from 'vue'
import Input from '@/components/inputData'

describe('inputData.vue', () => {
    let s=1;
    let inp=`导师：张三
2016级博士生：天一、王二、吴五
2015级硕士生：李四、王五、许六
2016级硕士生：刘一、李二、李三
2017级本科生：刘六、琪七、司四
        
导师：陈又
2010级博士生：张三
2012级本科生：天一
        
导师：友谊
2008级本科生：详解`
    var ans='{"name":"陈又","id":1,"lv":"导师","children":[{"name":"2010级博士生","id":2,"lv":"博士生","children":[{"name":"张三","id":3,"lv":"导师","children":[{"name":"2016级博士生","id":4,"lv":"博士生","children":[{"name":"天一","id":5,"lv":"2016级博士生","children":[]},{"name":"王二","id":6,"lv":"2016级博士生","children":[]},{"name":"吴五","id":7,"lv":"2016级博士生","children":[]}]},{"name":"2015级硕士生","id":8,"lv":"硕士生","children":[{"name":"李四","id":9,"lv":"2015级硕士生","children":[]},{"name":"王五","id":10,"lv":"2015级硕士生","children":[]},{"name":"许六","id":11,"lv":"2015级硕士生","children":[]}]},{"name":"2016级硕士生","id":12,"lv":"硕士生","children":[{"name":"刘一","id":13,"lv":"2016级硕士生","children":[]},{"name":"李二","id":14,"lv":"2016级硕士生","children":[]},{"name":"李三","id":15,"lv":"2016级硕士生","children":[]}]},{"name":"2017级本科生","id":16,"lv":"本科生","children":[{"name":"刘六","id":17,"lv":"2017级本科生","children":[]},{"name":"琪七","id":18,"lv":"2017级本科生","children":[]},{"name":"司四","id":19,"lv":"2017级本科生","children":[]}]}]}]},{"name":"2012级本科生","id":20,"lv":"本科生","children":[{"name":"天一","id":21,"lv":"2016级博士生","children":[]}]}]}'
    it('should render correct contents', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor().$mount()
    expect(vm.handleData(inp))
      .toEqual(ans)
  })
})
