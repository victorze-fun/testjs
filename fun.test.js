import request from 'supertest'
import { expect } from 'chai'

import app from './app.js'

const req = request(app)

describe('GET /', () => {
  it('responds with status 200', async () => {
    const res = await req.get('/')
    expect(res.status).to.equal(200)
    expect(res.text).contain('Victor')
  })
})
