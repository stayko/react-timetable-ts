import * as React from 'react';

interface Props {
  date: Date;
}

interface State {}

const WEEK_LENGTH = 6;

export default class WeekView extends React.Component<Props, State> {
  state = {};

  getDates = () => {
    const dates = [];
    let currentDate = this.props.date;
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
      result.push(<div className="react-timetable-ts__column-item" key={(id += 1)} />);
    });
    return result;
  };

  render() {
    return (
      <React.Fragment>
        <h3>Week View</h3>
        <div className="react-timetable-ts__header">{this.renderHeader()}</div>
        <div className="react-timetable-ts__column">{this.renderColumns()}</div>
      </React.Fragment>
    );
  }
}
