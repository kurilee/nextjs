export default async (req, res) => {
    const { q, nextPageToken } = req.body;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${q}&nextPageToken=${nextPageToken}&maxResults=50&order=relevance&regionCode=JP&key=AIzaSyBr6tbHXG6lVecYpgYjXoLUFE_8HQilrqc`
    console.log(url);
    const response = await fetch(url, { method: 'GET'});
    console.log(response);
    res.json(response.body);
}  