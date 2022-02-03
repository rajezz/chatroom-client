export const showGoogleSignOn = (callback) => {
	google?.accounts.id.initialize({
		client_id: "228116502884-hfirj4th1k701547iro7vgfrq0cm0tif.apps.googleusercontent.com",
		callback
	})
	google.accounts.id.prompt()
}

export const revokeAccess = (email, callback) => {
	google?.accounts?.id?.revoke(email, (done) => {
        console.log("Successfully signed out!!")
        callback()
	})
}