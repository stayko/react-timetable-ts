import * as React from 'react';
import WeekView from './WeekView';
import DayView from './DayView';
import ListView from './ListView';

enum View {
  Day,
  Week,
  List,
}

interface Props {
  startDate?: Date;
}

interface State {
  currentDate: Date;
  view: View;
}

export default class Timetable extends React.Component<Props, State> {
  state = {
    currentDate: this.props.startDate || new Date(),
    view: View.Week,
  };
  render() {
    return (
      <div className="react-timetable-ts">
        {this.state.view === View.Week && <WeekView />}
        {this.state.view === View.Day && <DayView />}
        {this.state.view === View.List && <ListView />}
      </div>
    );
  }
}
