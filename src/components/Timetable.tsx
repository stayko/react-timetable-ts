import * as React from 'react';
import WeekView from './WeekView';
import DayView from './DayView';
import ListView from './ListView';
import Controls from './Controls';

enum View {
  Week,
  Day,
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
    const d = new Date(this.state.currentDate.valueOf());
    d.setDate(d.getDate() - 7);
    this.setState({ currentDate: d }, () => console.log('pressed back'));
  };

  nextHandler = () => {
    const d = new Date(this.state.currentDate.valueOf());
    d.setDate(d.getDate() + 7);
    this.setState({ currentDate: d }, () => console.log('pressed next'));
  };

  viewHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = e;
    this.setState({ view: parseInt(value) }, () => console.log('changed date'));
  };

  render() {
    const { view, currentDate } = this.state;
    return (
      <div className="react-timetable-ts">
        <Controls backHandler={this.backHandler} nextHandler={this.nextHandler} viewHandler={this.viewHandler} />
        <div>
          {view === View.Week && <WeekView date={currentDate} />}
          {view === View.Day && <DayView date={currentDate} />}
          {view === View.List && <ListView date={currentDate} />}
        </div>
      </div>
    );
  }
}
