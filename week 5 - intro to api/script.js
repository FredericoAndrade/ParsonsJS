function buildURL (blogname, apiKey){
	return 'http://api.tumblr.com/v2/blog'
		+ blogname
		+ 'tumblr.com/posts?api_key='
		+ apiKey
		+ '&callback=?'
}

var key = 

var url = buildURL ('bacac603', key)

$.getJSON(url, function (data){

	console.log(data)

	var blog = data.response.blog,
		posts = data.response.posts

	createHeader(blog)
	createPosts(posts)
})

function createHeader (blog) {
	var title = $('<h1>' + blog.title + '</h1>')
	title.appendTo('body')
}

function createPosts (posts){
	posts.forEach(function (posts) {

		var postElement = $
	})

}