import * as React from 'react';

interface Props {
  backHandler: Function;
  nextHandler: Function;
}

interface State {}

export default class Controls extends React.Component<Props, State> {
  state = {};
  render() {
    return (
      <div>
        <button onClick={() => this.props.nextHandler()}>Next</button>
        <button onClick={() => this.props.backHandler()}>Back</button>
      </div>
    );
  }
}
