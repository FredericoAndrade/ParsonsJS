var flickrApiKey = "557d7fb1c2785b8f96d621fc7e8b6ab9"
	searchURL = "http://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key="+flickrApiKey+"&per_page=30&format=json&nojsoncallback=1"

$(function () {
	$.getJSON(searchURL, function (response) {
		console.log(response)
		if (response.stat === "ok") {
			response.photos.photo.forEach(buildPhoto)
		}
	})
})

function buildPhoto (p) {
	var img = new Image()
		url = buildPhotoUrl(p,'z')
		console.log(url)
		img.src = url
		img.onload = function () {
			$('body').append(img)
		}
}

function buildPhotoUrl(p, size) {
	size = size || 's';
	return "http://farm" + p.farm + ".static.flickr.com/" + p.server + "/" + p.id + "_" + p.secret + "_" + size + ".jpg";
}