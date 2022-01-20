const Header = ({ username, setUsername }) => {
    const onInputChange = (event) => 
        setUsername(event.target.value)
    
    return (
        <div className="user-section">
            <h2>Chatroom application</h2>
            <div className="user-info">
                <input type="text" name="username" value={username} onChange={onInputChange} id="username" />
            </div>
        </div>
    )
}

export default Header