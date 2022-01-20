import { useReducer, useEffect } from "react"
import ChatMessage from "./ChatMessage"
import ChatReducer from "../store/ChatReducer.js"
import { initializeSocket } from "../services/socket.service"

const emptyState = {
	messages: []
}

const Chatroom = () => {
	const [state, dispatch] = useReducer(ChatReducer, emptyState)

	useEffect(() => {
		initializeSocket(dispatch)
	}, [])
	return (
		<div className="chat-section">
			<div className="message-list">
				{state.messages.map((message) => (
					<ChatMessage content={message.content} author={message.author} />
				))}
			</div>
			<div className="message-create-panel">
				<input type="text" name="message-content" placeholder="Enter message..." />
				<button className="icon-btn send">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 0 24 24"
						width="24px"
						fill="currentColor">
						<path d="M0 0h24v24H0z" fill="none" />
						<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
					</svg>
				</button>
			</div>
		</div>
	)
}

export default Chatroom
