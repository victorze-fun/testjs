import request from 'supertest'
import { expect } from 'chai'

import app from '../../app.js'

const req = request(app)

describe('/users', () => {
  it('it loads the users list page', async () => {
    const res = await req.get('/users')

    expect(res.status).to.equal(200)
    expect(res.text).contain('Users')
  })

  it('it loads the users details page', async () => {
    const id = 5

    const res = await req.get(`/users/${id}`)

    expect(res.status).to.equal(200)
    expect(res.text).contain(`User with id: ${id}`)
  })
})

