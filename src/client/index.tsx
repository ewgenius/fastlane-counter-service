import './styles/index.scss';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider, observer, inject } from 'mobx-react';
import { observable } from 'mobx';

const state = observable({
  count: 0
});

@inject('state')
@observer
class App extends React.Component<any, {}> {
  render() {
    console.log(this.props);
    return <div>app</div>;
  }
}

render(<Provider state={state}>
  <App />
</Provider>, document.querySelector('#root'));
