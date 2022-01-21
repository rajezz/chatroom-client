const SERVER_BASE_URI = `http://localhost:1100`

const headers = {
	accept: "application/json",
	"Content-Type": "application/json"
}

const wrapper = (method) =>
	new Promise((resolve) => {
		method.then((response) => resolve([null, response])).catch((error) => resolve([error]))
	})

export const getResources = (endpoint) =>
	wrapper(
		fetch(`${SERVER_BASE_URI}${endpoint}`, {
			method: "GET",
			headers
		})
	)

export const postResources = (endpoint, body) =>
	wrapper(
		fetch(`${SERVER_BASE_URI}${endpoint}`, {
			method: "POST",
			headers,
			body: JSON.stringify(body)
		})
	)
