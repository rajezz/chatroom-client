import { useReducer, useEffect } from "react"

const ChatMessage = ({ author, content }) => {
	return (
		<div className="message-row">
			<div className="author-section">{author}</div>
			<div className="content-section">{content}</div>
		</div>
	)
}

export default ChatMessage
