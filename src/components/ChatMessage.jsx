import { useReducer, useEffect } from "react"

const ChatMessage = ({ username, author, content }) => {
	return (
		<div className={`message-row ${username === author ? "right" : ""}`}>
			<div className="author-section">{author}</div>
			<div className="content-section">{content}</div>
		</div>
	)
}

export default ChatMessage
