var postsData = [
	{
		title: 'Introduction',
		url: 'http://test.com/intro/',
	},
	{
		title: 'Test 1',
		url: 'http://url.com/test-1/',
	},
	{
		title: 'Test 2',
		url: 'http://url.com/test-2/',
	},
];

Template.postsList.helpers({
	posts: postsData
});