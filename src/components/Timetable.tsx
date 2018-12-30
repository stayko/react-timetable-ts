import * as React from 'react';
import Controls from './Controls';

enum View {
  Week,
  Day,
  List,
}

const WEEK_LENGTH = 6;

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

  renderTime = () => {
    const hours: JSX.Element[] = [];
    for (let hour = 0; hour < 24; hour += 1) {
      hours.push(<div className="react-timetable-ts__time-column-item">{`${hour < 10 ? 0 : ''}${hour}:00`}</div>);
    }
    return hours;
  };

  getDates = () => {
    const dates = [];
    let { currentDate } = this.state;
    const endDate = new Date(currentDate.valueOf());
    endDate.setDate(endDate.getDate() + WEEK_LENGTH);
    const addDays = (d: Date, days: number) => {
      const date = new Date(d.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };

    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }
    return dates;
  };

  renderHeader = () => {
    const dates = this.getDates();
    const result: Array<JSX.Element> = [];
    let id = 0;
    let formattedDate;
    dates.forEach(d => {
      formattedDate = new Date(d.valueOf());
      result.push(
        <div
          className="react-timetable-ts__header-item"
          key={(id += 1)}
        >{`${formattedDate.getDate()}-${formattedDate.getMonth() + 1}-${formattedDate.getFullYear()}`}</div>
      );
    });

    return result;
  };

  renderColumns = () => {
    const dates = this.getDates();
    const result: Array<JSX.Element> = [];
    let id = 0;
    dates.forEach(d => {
      result.push(
        <div className="react-timetable-ts__day-column-item" key={(id += 1)}>
          {id}
        </div>
      );
    });
    return result;
  };

  render() {
    return (
      <div className="react-timetable-ts">
        <Controls backHandler={this.backHandler} nextHandler={this.nextHandler} viewHandler={this.viewHandler} />
        <h3>{View[this.state.view]} view</h3>
        <section className="react-timetable-ts__table">
          <div className="react-timetable-ts__header">
            <div className="react-timetable-ts__header-item--empty" />
            {this.renderHeader()}
          </div>
          <div className="react-timetable-ts__columns_holder">
            <div className="react-timetable-ts__time-column">{this.renderTime()}</div>
            <div className="react-timetable-ts__day-column">{this.renderColumns()}</div>
          </div>
        </section>
      </div>
    );
  }
}
