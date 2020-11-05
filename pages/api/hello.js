// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const res = await fetch('http://kuriz.oicp.io/master?pageNo=1&pageSize=30');
  res.statusCode = 200;
  res.json(res);
}
