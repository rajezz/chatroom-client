import { useReducer, useEffect } from "react"

const formatDate = (createdAt) => {
	const formattedDate = new Date(createdAt).toJSON()
	return formattedDate.replaceAll("-", "/").replaceAll("T", "  ").replaceAll(/[.][0-9]+Z$/g, "")
}

const ChatMessage = ({ username, author, content, createdAt }) => {
	return (
		<div className={`message-row ${username === author ? "right" : ""}`}>
			<div className="author-section">{author}</div>
			<div className="content-section">{content}</div>
			<div className="timestamp" title={new Date(createdAt).toString()}>
				{formatDate(createdAt)}
			</div>
		</div>
	)
}

export default ChatMessage
