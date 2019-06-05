import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.less';

export default class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  };
  renderString = doc => {
    return (
      Array.isArray(doc) &&
      doc.map(dom => {
        if (dom.type === 'text') {
          console.log(4444444444444444444444);
          console.log(dom);
          return (
            <Text
              key={Math.random() * Math.random()}
              className={(dom.attrs && dom.attrs.class) || ''}
            >
              {dom.content}
            </Text>
          );
        } else if (dom.type === 'tag') {
          console.log(22222222222222);
          console.log(dom);
          return (
            <Text
              key={Math.random() * Math.random()}
              className={(dom.attrs && dom.attrs.class) || ''}
            >
              {dom.children && this.renderDom(dom.children)}
            </Text>
          );
        }
      })
    );
  };
  renderDom = doc => {
    return (
      Array.isArray(doc) &&
      doc.map(dom => {
        if (dom.type === 'text') {
          console.log(333333333333333);
          console.log(dom);
          return (
            <Text
              key={Math.random() * Math.random()}
              className={(dom.attrs && dom.attrs.class) || ''}
            >
              {dom.content}
            </Text>
          );
        } else if (dom.type === 'tag') {
          console.log(1111111111111);
          console.log(dom);
          return (
            <Text
              key={Math.random() * Math.random()}
              className={(dom.attrs && dom.attrs.class) || ''}
            >
              {dom.children && this.renderString(dom.children)}
            </Text>
          );
        }
      })
    );
  };

  render() {
    const ast = [
      {
        type: 'tag',
        name: 'span',
        voidElement: false,
        attrs: {},
        children: [
          {
            content: '在',
            type: 'text'
          },
          {
            attrs: { class: 'highlight' },
            children: [{ content: '端午活动页面', type: 'text' }],
            name: 'a',
            type: 'tag'
          },
          { content: '提交表单', type: 'text' }
        ]
      }
    ];
    return <View className="index">{this.renderDom(ast)}</View>;
  }
}
