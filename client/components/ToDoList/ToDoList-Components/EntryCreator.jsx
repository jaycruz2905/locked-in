import React, { useState } from 'react';

function EntryCreator({ entriesList, setEntriesList }) {
    const [ entryInput, setEntryInput ] = useState('');

    function handleEntryListUpdate(e) {
        e.preventDefault();
        const entriesListCopy = entriesList.slice();
        entriesListCopy.push(entryInput);
        setEntriesList(entriesListCopy);
    }

    return (
        <div className='entry-creator'>
            <div className='entry-creator-box'>
                <form onSubmit={handleEntryListUpdate}>
                    <textarea
                        cols="30"
                        rows="2"
                        required
                        className='entry-box-input'
                        onChange={(e) => setEntryInput(e.target.value)}
                    >
                    </textarea>

                    <div className='add-btn-container'>
                        <button type='submit'>Add</button>
                    </div>
                </form>
            </div>

            
        </div>
    );
}

export default EntryCreator;