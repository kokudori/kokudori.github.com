(function (undefined) {
	'use strict';

	var github = new Github({
		token: '4cd68ca2c349cbcfac1c',
		auth: 'oauth'
	});
	github.getUser().repos(function (error, repos) {
		console.log(repos);
		repos.forEach(function (repo) {
			console.log(repo);
		});
	});
}).apply(this);