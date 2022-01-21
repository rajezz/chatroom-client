export const MESSAGE_PUSH = "MESSAGE_PUSH"
export const UPDATE_NEW_MESSAGE_CONTENT = "UPDATE_NEW_MESSAGE_CONTENT"

export function createAction(type, payload) {
	return {
		type,
		payload
	}
}
