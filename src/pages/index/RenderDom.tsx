import Taro, { Component } from '@tarojs/taro';
import { Text } from '@tarojs/components';
import RenderString from './RenderString';
type IState = {};
type IProps = {
  doc: any;
};
export default class RenderDom extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  componentDidMount() {
    console.log(123123);
  }
  render() {
    const { doc } = this.props;
    Array.isArray(doc) &&
      doc.map(dom => {
        if (dom.type === 'text') {
          // console.log(333333333333333);
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
          console.log(dom);
          return (
            <Text
              key={Math.random() * Math.random()}
              className={(dom.attrs && dom.attrs.class) || ''}
            >
              {dom.children && <RenderString doc={dom.children} />}
            </Text>
          );
        }
      });
  }
}
