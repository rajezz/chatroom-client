const Sidebar = ({ userInfo, setUserInfo }) => {
	const onInputChange = (key) => (event) =>
		setUserInfo((prevValue) => ({ ...prevValue, [key]: event.target.value }))

	return (
		<div className="user-section">
			<h2>Chatroom application</h2>
			<div className="user-info">
				<input type="text" name="name" value={userInfo.name} onChange={onInputChange("name")} />
				<input
					type="text"
					name="email"
					value={userInfo.email}
					onChange={onInputChange("email")}
				/>
			</div>
		</div>
	)
}

export default Sidebar
