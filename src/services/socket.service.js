import { io } from "socket.io-client"
import { ACTION_MESSAGE_PUSH, createAction } from "../store/actions"

export function initializeSocket(chatReducerDispatch) {
	const socket = io("http://localhost:1100")

	socket.on("connect", () => {
		console.log("socket instance > ", socket)
	})
	socket.emit("FETCH_MESSAGES", {}, (response) => {
		console.log("Response from the server > ", response)
		const { messages } = response
		chatReducerDispatch(createAction(ACTION_MESSAGE_PUSH, { messages }))
	})

	socket.on("NEW_MESSAGE", (args) => {
		console.log("Message broadcasted from server > ", args)
	})
}
