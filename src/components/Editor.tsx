import React, { ChangeEvent, useState, FC, useEffect } from 'react'

export const Editor: FC = () => {
	const [note, setNote] = useState('')

	useEffect(() => {
		setNote(localStorage.getItem('note') || '')
	}, [])

	function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
		setNote(e.target.value)
	}
	function persistNote() {
		localStorage.setItem('note', note)
	}
	return (
		<div>
			<textarea
				className="editor"
				value={note}
				onBlur={persistNote}
				onChange={handleChange}
				placeholder="Enter your note here"
			/>
		</div>
	)
}
