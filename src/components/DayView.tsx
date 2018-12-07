import * as React from 'react';

interface Props {
  date: Date;
}

interface State {}

export default class DayView extends React.Component<Props, State> {
  state = {};
  render() {
    return <div>DayView</div>;
  }
}
