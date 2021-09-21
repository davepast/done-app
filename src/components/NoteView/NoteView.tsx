import classNames from 'classnames';
import React from 'react';
import { Store } from '../../Store';

import './NoteView.css';

export interface NoteViewProps {
  className?: string
  selectedDay: Date
  store: Store
}

export function NoteView(props: NoteViewProps) {
  const { className, selectedDay, store } = props
  const { getNote, saveNote } = store

  // Challenge 1: 
  //  - Add textarea for user input
  //  - Set a placeholder to "What have you done this day?" or other appropriate string
  //  - Enable autofocus of the input
  //  - Add a state for the note content
  //  - Save the note between sessions in localStorage via localStorage.getItem() and localStorage.setItem()

  // Challenge 3: 
  //  - Define a new prop to receive the selected day and write it in placeholder instead of "this day"
  //  - Think of changing the logic of saving the note in localStorage so that it is different for each day

  // Challenge 4
  //  - Define a new prop to receive the store
  //  - Use store to save the note
  
  // TODO



  const [note, setNote] = React.useState(
    getNote(selectedDay) ?? ''
  )

  React.useEffect(() => {
    saveNote(note, selectedDay)
  }, [note, selectedDay, saveNote])

  return (
    <section className={classNames("note-view", className)}>
      <textarea
        className='note-view__textarea'
        placeholder='What have you done this day?'
        autoFocus
        value={note}
        onChange={(e) => {
          setNote(e.target.value)
        }}
      />
    </section>
  )
}
