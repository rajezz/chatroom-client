export const ACTION_MESSAGE_PUSH = "ACTION_MESSAGE_PUSH"

export function createAction(type, payload) {
	return {
		type,
		payload
	}
}
