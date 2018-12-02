import * as React from 'react';

enum View {
  Day,
  Week,
  List,
}

export interface Props {
  startDate?: Date;
}

export interface State {
  currentDate: Date;
  view: View;
}

export default class Timetable extends React.Component<Props, State> {
  state = {
    currentDate: this.props.startDate || new Date(),
    view: View.Week,
  };
  render() {
    return <div>Timetable component</div>;
  }
}
