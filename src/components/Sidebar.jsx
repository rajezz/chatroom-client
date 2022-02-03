import VerifiedIcon from "./Verified.icon"
import { showGoogleSignOn, revokeAccess } from "../utils/google"

const Sidebar = ({ userInfo, setUserInfo, googleSignOn, onSignIn, onSignOut }) => {
	const onInputChange = (key) => (event) =>
		setUserInfo((prevValue) => ({ ...prevValue, [key]: event.target.value }))

	const onGoogleSignIn = (event) => {
		showGoogleSignOn(onSignIn)
	}
	const onGoogleSignOut = (event) => {
		revokeAccess(userInfo?.email, onSignOut)
	}
	return (
		<div className="user-section">
			<h2>Chatroom application</h2>
			<div className="user-info">
				<div className="input-row">
					<input
						type="text"
						name="name"
						value={userInfo.name}
						onChange={onInputChange("name")}
						disabled={googleSignOn}
					/>
					<VerifiedIcon attr={{ fill: googleSignOn ? "currentColor" : "transparent" }} />
				</div>
				<div className="input-row">
					<input
						type="text"
						name="email"
						value={userInfo.email}
						onChange={onInputChange("email")}
						disabled={googleSignOn}
					/>
					<VerifiedIcon attr={{ fill: googleSignOn ? "currentColor" : "transparent" }} />
				</div>
				<div className="action-row">
					<button
						onClick={onGoogleSignIn}
						className={googleSignOn ? "green" : "blue"}
						disabled={googleSignOn}>
						Sign In
					</button>
					<button
						onClick={onGoogleSignOut}
						className={googleSignOn ? "red" : "grey"}
						disabled={!googleSignOn}>
						Sign Out
					</button>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
