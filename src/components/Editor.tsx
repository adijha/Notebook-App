import React, { ChangeEvent, useState } from 'react'

export const Editor = () => {
	const [note, setNote] = useState('')
	function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
		setNote(e.target.value)
	}
	return (
		<div>
			<textarea
				className="editor"
				value={note}
				onChange={handleChange}
				placeholder="Enter your note here"
			/>
		</div>
	)
}
