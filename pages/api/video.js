export default async (req, res) => {
    const { videoId } = req.body;
    const url = `https://youtube.googleapis.com/youtube/v3/videos?id=${videoId}=AIzaSyBr6tbHXG6lVecYpgYjXoLUFE_8HQilrqc`
    const response = await fetch(url, { method: 'GET'});
    res.json(response.body);
}  