import Taro, { Component } from '@tarojs/taro';
import { Text } from '@tarojs/components';
import RenderDom from './RenderDom';
type IState = {};
type IProps = {
  doc: any;
};
export default class RenderString extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    const { doc } = this.props;
    Array.isArray(doc) &&
      doc.map(dom => {
        if (dom.type === 'text') {
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
              {dom.children && <RenderDom doc={dom.children} />}
            </Text>
          );
        }
      });
  }
}
