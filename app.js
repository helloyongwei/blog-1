function serverHandle(req, res) {

  res.setHeader('Content-type', 'application/json')

  const resData = {
    url: req.url,
    method: req.method,
    env: process.env.NODE_ENV
  }

  let postData = ""
  req.on("data", chunk => {
    postData += chunk
  })
  req.on("end", () => {
    console.log(postData) //postData为请求的数据
  })

  res.end(JSON.stringify(resData))
}

module.exports = serverHandle