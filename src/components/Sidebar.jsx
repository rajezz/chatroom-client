const Sidebar = ({ userInfo, setUserInfo, googleSignOn }) => {
	const onInputChange = (key) => (event) =>
		setUserInfo((prevValue) => ({ ...prevValue, [key]: event.target.value }))

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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						enable-background="new 0 0 24 24"
						viewBox="0 0 24 24"
						fill={googleSignOn ? "currentColor" : "transparent"}>
						<g>
							<rect fill="none" height="24" width="24" />
							<rect fill="none" height="24" width="24" />
						</g>
						<g>
							<path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M9.38,16.01L7,13.61c-0.39-0.39-0.39-1.02,0-1.41 l0.07-0.07c0.39-0.39,1.03-0.39,1.42,0l1.61,1.62l5.15-5.16c0.39-0.39,1.03-0.39,1.42,0l0.07,0.07c0.39,0.39,0.39,1.02,0,1.41 l-5.92,5.94C10.41,16.4,9.78,16.4,9.38,16.01z" />
						</g>
					</svg>
				</div>
				<div className="input-row">
					<input
						type="text"
						name="email"
						value={userInfo.email}
						onChange={onInputChange("email")}
						disabled={googleSignOn}
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						enable-background="new 0 0 24 24"
						viewBox="0 0 24 24"
						fill={googleSignOn ? "currentColor" : "transparent"}>
						<g>
							<rect fill="none" height="24" width="24" />
							<rect fill="none" height="24" width="24" />
						</g>
						<g>
							<path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M9.38,16.01L7,13.61c-0.39-0.39-0.39-1.02,0-1.41 l0.07-0.07c0.39-0.39,1.03-0.39,1.42,0l1.61,1.62l5.15-5.16c0.39-0.39,1.03-0.39,1.42,0l0.07,0.07c0.39,0.39,0.39,1.02,0,1.41 l-5.92,5.94C10.41,16.4,9.78,16.4,9.38,16.01z" />
						</g>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
