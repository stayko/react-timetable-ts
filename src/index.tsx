import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './stylesheets/react-timetable.scss';

import Timetable from './components/Timetable';

ReactDOM.render(<Timetable />, document.getElementById('root') as HTMLElement);
