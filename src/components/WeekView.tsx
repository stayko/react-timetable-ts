import * as React from 'react';

interface Props {
  date: Date;
}

interface State {}

export default class WeekView extends React.Component<Props, State> {
  state = {};

  getDates = () => {
    const dates = [];
    let currentDate = this.props.date;
    const endDate = new Date(currentDate.valueOf());
    endDate.setDate(endDate.getDate() + 6);
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

  renderColumns = () => {
    const dates = this.getDates();
    const result: Array<JSX.Element> = [];
    let id = 0;
    let formattedDate;
    dates.forEach(d => {
      formattedDate = new Date(d.valueOf());
      result.push(
        <div key={(id += 1)}>{`${formattedDate.getDate()}-${formattedDate.getMonth() +
          1}-${formattedDate.getFullYear()}`}</div>
      );
    });

    return result;
  };

  render() {
    return (
      <React.Fragment>
        <h3>Week View</h3>
        <div>{this.renderColumns()}</div>
      </React.Fragment>
    );
  }
}
