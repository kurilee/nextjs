export default async (req, res) => {
    const { videoId, apikey } = req.body;
    const url = `https://youtube.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apikey}`
    const response = await fetch(url, { method: 'GET'});
    res.json(response.body);
}  