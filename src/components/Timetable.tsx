import * as React from 'react';
import WeekView from './WeekView';
import DayView from './DayView';
import ListView from './ListView';
import Controls from './Controls';

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

  backHandler = () => {
    alert('pressed back');
  };

  nextHandler = () => {
    alert('pressed next');
  };

  render() {
    const { view, currentDate } = this.state;
    return (
      <div className="react-timetable-ts">
        <Controls backHandler={this.backHandler} nextHandler={this.nextHandler} />
        {view === View.Week && <WeekView date={currentDate} />}
        {view === View.Day && <DayView date={currentDate} />}
        {view === View.List && <ListView date={currentDate} />}
      </div>
    );
  }
}
