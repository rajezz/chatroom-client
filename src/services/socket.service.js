import { io } from "socket.io-client"
import { MESSAGE_PUSH, createAction } from "../store/actions"

let socket

export function initializeSocket(chatReducerDispatch) {
	socket = io("http://localhost:1100")

	socket.on("connect", () => {
		console.log("socket instance > ", socket)
	})
	socket.emit("FETCH_MESSAGES", {}, (response) => {
		console.log("Response from the server > ", response)

		const { messages } = response
		
		chatReducerDispatch(createAction(MESSAGE_PUSH, { messages }))
	})
	
	socket.on("NEW_MESSAGE_CREATED", (args) => {
		console.log("Message broadcasted from server > ", args)

		const { messages } = args

		chatReducerDispatch(createAction(MESSAGE_PUSH, { messages }))
	})
}

export function sendMessageToServer(message) {
	socket.emit("NEW_MESSAGE_CREATE", { message })
}
