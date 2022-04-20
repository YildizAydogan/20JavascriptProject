// select Dom Elements

const imageContainer = document.querySelector('.image-container');
const loader = document.querySelector('.loader');

let photosArray = [];

// UNSPLASH API
const count = 10;
const apiKey = '8TJUqNjbxMfTy0-EEj-Ck2rqFdBgPV5V0liDBbAhQ0w';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create & Display Images

const displayphotos = () => {
	// Run function for each object in photosArray

	photosArray.forEach(photo => {
		// create a element
		const item = document.createElement('a');
		item.setAttribute('href', photo.links.html);
		item.setAttribute('target', '_blank');
		// create img element
		const img = document.createElement('img');
		img.setAttribute('src', photo.urls.regular);
		img.setAttribute('alt', photo.alt_description);
		img.setAttribute('title', photo.alt_description);
		// put <img> inside <a>
		item.appendChild(img);
		imageContainer.appendChild(item);
	});


	// Get Photos From API
	const getPhotos = async () => {
		try {
			const response = await fetch(apiUrl);
			photosArray = await response.json();
			displayphotos();
			return data;
		} catch (e) {
			console.log(e);
		}
	}

	// load function

	getPhotos();
