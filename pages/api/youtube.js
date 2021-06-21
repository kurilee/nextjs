export default async (req, res) => {
    const { q, nextPageToken } = req.body;
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${q}&nextPageToken=${nextPageToken}&maxResults=50&order=relevance&regionCode=JP&key=AIzaSyBr6tbHXG6lVecYpgYjXoLUFE_8HQilrqc`, { method: 'GET'});
    return response.body;
}  