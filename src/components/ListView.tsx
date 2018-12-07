import * as React from 'react';

interface Props {
  date: Date;
}

interface State {}

export default class ListView extends React.Component<Props, State> {
  state = {};
  render() {
    return <div>ListView</div>;
  }
}
