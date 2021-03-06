const test = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 3000)
  })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (req, res) => {
  await test()
  res.statusCode = 200
  res.json({ data: 'test' })
}
