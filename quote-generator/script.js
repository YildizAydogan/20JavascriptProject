//* Select DOM elements
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('tweet-button');
const newQuoteButton = document.getElementById('new-button');
const loader = document.getElementById('loader');
//* Array of quotes
// let apiQuotes = [];

//* Get New Quote

const newQuote = () => {
	//* Pick a random quote from apiQuotes array
	const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
	
	//* If author is empty, set author to 'Unknown'
	// if (quote.author === null) {
	// 	authorText.textContent = 'Unknown';
	// }
	// else {
	// 	authorText.textContent = quote.author;
	// }
	//* SHORT VERSION
	!quote.author ? authorText.textContent = 'Unknown' : authorText.textContent = quote.author;
	//* Check Quote length to determine styling
	if (quote.text.length >= 120)
		quoteText.classList.add('long-quote');
	else
		quoteText.classList.remove('long-quote');
	quoteText.textContent = quote.text;
}
//* Get Quotes From API
// const getQuotes = async () => {
// 	const apiUrl = "https://type.fit/api/quotes";
// 	try {
// 		const response = await fetch(apiUrl);
// 		apiQuotes = await response.json();
// 		newQuote();
// 	} catch (error) {
		// Cath Error Here
// 	}
// }


//* Tweet Quote
const tweetQuote = () => {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	window.open(twitterUrl, '_blank');
}

// Event Listeners

newQuoteButton.addEventListener('click', newQuote);
twitterButton.addEventListener('click', tweetQuote);


//* Load Function
newQuote();