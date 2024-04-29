import React, { useState } from 'react';

import Entry from './ToDoList-Components/Entry';
import EntryCreator from './ToDoList-Components/EntryCreator';

function EntriesContainer() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = months[month - 1] + ' ' + date + ',' + ' ' +  year;
    
    const [ entriesList, setEntriesList ] = useState([]);
    const [currDayOfWeek, setCurrDayOfWeek] = useState(daysOfWeek[today.getDay()]);
    const [currDate, setCurrDate] = useState(currentDate);

    const entries = [];
    for (let i = 0; i < entriesList.length; i++) {
        entries.push(<Entry 
            key={i} 
            index={i}
            entryVal={entriesList[i]}
            entriesList={entriesList}
            setEntriesList={setEntriesList}
        />);
    }

    return (
        <div className='entries-container'>
            <h1>{currDayOfWeek}</h1>
            <h2>{currDate}</h2>
            <EntryCreator entriesList={entriesList} setEntriesList={setEntriesList}/>
            {entries}
        </div>
    );
}

export default EntriesContainer;