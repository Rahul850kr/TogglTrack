// import React, { useState } from 'react'
// import Calendar from '@toast-ui/react-calendar';
// import '@toast-ui/calendar/dist/toastui-calendar.min.css';
// import 'tui-date-picker/dist/tui-date-picker.css';
// import 'tui-time-picker/dist/tui-time-picker.css';
// const Calenders = () => {
//     const [state,setState] = useState(false)
//     console.log(state)
//     // https://codesandbox.io/s/hc22z?file=/src/App.js

  
//   return (
//     <div >
//     <Calendar  />
//     </div>
//   )
// }

// export default Calenders


// // "react-bell-icon": "^1.0.1",

import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

export default function MyCalendar() {
  return (
    <div>
      <Calendar usageStatistics={false}  defaultView={"month"}/>
    </div>
  );
}