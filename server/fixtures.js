if(Posts.find().count() === 0){
	Posts.insert({
		title: 'Post 1',
		url: '/post-1/'
	});
	Posts.insert({
		title: 'Post 2',
		url: '/post-2/'
	});
	Posts.insert({
		title: 'Post 3',
		url: '/post-3/'
	});
}