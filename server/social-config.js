ServiceConfiguration.configurations.remove({
	service: 'facebook'
});

ServiceConfiguration.configurations.remove({
	service: 'google'
});

ServiceConfiguration.configurations.insert({
	service: 'facebook',
	appId: '1613189092292217',
	secret: 'bd47ebf45cff4c60ed81d1d1f47fe61b'
});

ServiceConfiguration.configurations.insert({
	service: 'google',
	clientId: '239679698156-g71ehrlnc1287vtpdsjur0gpkvgp7j8k.apps.googleusercontent.com',
	loginStyle: 'popup',
	secret: 'KJ8b-u-ndWNGrNwA5jNX2j1C'
});