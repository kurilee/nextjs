export default async (req, res) => {
    const { q, nextPageToken } = req.body;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${q}&nextPageToken=${nextPageToken}&maxResults=50&order=relevance&type=video&regionCode=JP&key=AIzaSyBr6tbHXG6lVecYpgYjXoLUFE_8HQilrqc`
    const response = await fetch(url, { method: 'GET'});
    res.json(response.body);
}  