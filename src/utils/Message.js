import { v4 as UUID } from "uuid"

export const getMessage = (content, author) => ({
	id: UUID(),
	content,
	author
})
