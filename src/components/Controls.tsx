import * as React from 'react';

interface Props {
  backHandler: Function;
  nextHandler: Function;
  viewHandler: Function;
}

interface State {}

export default class Controls extends React.Component<Props, State> {
  state = {};
  render() {
    return (
      <div>
        <button onClick={() => this.props.backHandler()}>Back</button>
        <button onClick={() => this.props.nextHandler()}>Next</button>
        <select onChange={e => this.props.viewHandler(e)}>
          <option value="0">Week</option>
          <option value="1">Day</option>
          <option value="2">List</option>
        </select>
      </div>
    );
  }
}
