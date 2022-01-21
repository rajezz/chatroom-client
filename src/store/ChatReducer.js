import { MESSAGE_PUSH, UPDATE_NEW_MESSAGE_CONTENT } from "./actions"

export default function ChatReducer(state, action) {
	switch (action.type) {
		case MESSAGE_PUSH:
			return {
				...state,
				messages: state.messages.concat(action.payload.messages)
			}
		case UPDATE_NEW_MESSAGE_CONTENT:
			return {
				...state,
				newMessage: action.payload.newMessage
			}
		default:
			return {
				messages: [],
				newMessage: ""
			}
	}
}
