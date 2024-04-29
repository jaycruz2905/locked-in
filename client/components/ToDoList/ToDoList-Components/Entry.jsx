import React, {} from 'react';

function Entry({ index, entryVal, entriesList, setEntriesList }) {

    function handleDeleteBtn() {
        const entriesListCopy = entriesList.slice();
        entriesListCopy.splice(index, 1);
        setEntriesList(entriesListCopy);
    }

    return (
        <div className='entry'>
            <p>{entryVal}</p>
            <button onClick={handleDeleteBtn}>DELETE</button>
        </div>
    );
}

export default Entry;