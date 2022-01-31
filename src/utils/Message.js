import { v4 as UUID } from "uuid"

export const getMessage = (content, author) => ({
	messageId: UUID(),
	content,
	author
})
