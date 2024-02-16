export const index = (req, res) => {
  res.send('Users')
}

export const show = (req, res) => {
  const { id } = req.params

  res.render('user', { id })
}

