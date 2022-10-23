import { Badge, Calendar } from 'antd';
import React from 'react'
import { scheduleData } from '../data/dummy';



const CalendarPage = () => {

    const dateCellRender = (value) => {
       
        return (
          <ul className="events">
            {scheduleData.map((item) => (
              <li key={item.Id}>
                <Badge  text={item.Subject} />
              </li>
            ))}
          </ul>
        );
      };

  return (
    <div>
        
        <Calendar />;
    </div>
  )
}

export default CalendarPage