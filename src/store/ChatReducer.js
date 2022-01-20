import { ACTION_MESSAGE_PUSH } from "./actions"

export default function ChatReducer(state, action) {
	switch (action.type) {
		case ACTION_MESSAGE_PUSH:
			return {
				messages: state.messages.concat(action.payload.messages)
			}
		default:
			return {
				messages: []
			}
	}
}
