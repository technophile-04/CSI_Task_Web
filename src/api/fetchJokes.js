const URL = 'https://v2.jokeapi.dev/joke/Programming?amount=10';
async function fetchJokes() {
	try {
		const res = await fetch(URL);
		const data = await res.json();
		console.log(data.jokes);
		return data.jokes;
	} catch (error) {
		console.log(error);
	}
}

export default fetchJokes;
