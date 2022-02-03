import { useState, useEffect } from "react"

import { initializeSocket } from "./services/socket.service"
import { postResources } from "./services/api.service"

import { showGoogleSignOn } from "./utils/google"
import Sidebar from "./components/Sidebar"
import Chatroom from "./components/Chatroom"

const App = () => {
	const [userInfo, setUserInfo] = useState({ name: "Anonymous user", email: "" })
	const [googleSignOn, toggleGoogleSignOn] = useState(false)

	const onSignIn = async (response) => {
		console.log("Response from google > ", response)

		const [signinError, signinResponse] = await postResources("/api/user/signin", {
			token: response.credential
		})

		if (signinError)
			return console.error("Error occurred while verifying google Sign On > ", signinError)

		const userResponse = await signinResponse.json()

		const { name, email } = userResponse.userInfo

		console.log("handleCredentialResponse | Response from server > ", userResponse)

		setUserInfo({ name, email })

		toggleGoogleSignOn(true)
	}

	const onSignOut = () => {
		setUserInfo({ name: "", email: "" })

		toggleGoogleSignOn(false)
	}

	useEffect(() => {
		// if (!google) return

		// google.accounts.id.initialize({
		// 	client_id: "228116502884-hfirj4th1k701547iro7vgfrq0cm0tif.apps.googleusercontent.com",
		// 	callback: processCredentials
		// })
		// google.accounts.id.prompt()
		showGoogleSignOn(onSignIn)
	}, [])

	return (
		<div className="page">
			<Sidebar
				userInfo={userInfo}
				setUserInfo={setUserInfo}
				googleSignOn={googleSignOn}
				onSignIn={onSignIn}
				onSignOut={onSignOut}
			/>
			<Chatroom userInfo={userInfo} />
		</div>
	)
}

export default App
