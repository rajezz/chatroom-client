import { useReducer, useEffect } from "react"
import ChatMessage from "./ChatMessage"
import ChatReducer from "../store/ChatReducer.js"
import { initializeSocket, sendMessageToServer } from "../services/socket.service"
import { createAction } from "../store/actions"
import { UPDATE_NEW_MESSAGE_CONTENT } from "../store/actions"
import { getMessage } from "../utils/Message"

const emptyState = {
	messages: [],
	newMessage: ""
}

const Chatroom = ({ userInfo }) => {
	const [state, dispatch] = useReducer(ChatReducer, emptyState)

	const sendMessage = (event) => {
		event.preventDefault()
		console.log("Message need to be sent > ", state.newMessage)
		if (state.newMessage == "") return

		const message = getMessage(state.newMessage, userInfo.name)

		sendMessageToServer(message)

		dispatch(createAction(UPDATE_NEW_MESSAGE_CONTENT, { newMessage: "" }))

	}

	const inputChanged = (event) => {
		dispatch(createAction(UPDATE_NEW_MESSAGE_CONTENT, { newMessage: event.target.value }))
	}

	useEffect(() => {
		initializeSocket(dispatch)
	}, [])

	return (
		<div className="chat-section">
			<div className="message-list">
				{state.messages.map((message) => (
					<ChatMessage
						username={userInfo.name}
						content={message.content}
						author={message.author}
					/>
				))}
			</div>
			<form className="message-create-panel">
				<input
					type="text"
					name="message-content"
					placeholder="Enter message..."
					onChange={inputChanged}
					value={state.newMessage}
				/>
				<button type="submit" className="icon-btn send" onClick={sendMessage}>
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
			</form>
		</div>
	)
}

export default Chatroom
