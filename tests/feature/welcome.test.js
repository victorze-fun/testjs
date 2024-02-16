import request from 'supertest'
import { expect } from 'chai'

import app from '../../app.js'

const req = request(app)

describe('/welcome', () => {
  it('it welcomes users with nickname', async () => {
    const res = await req.get('/welcome/Victor/victorze')

    expect(res.status).to.equal(200)
    expect(res.text).contain(`Welcome Victor, your nick is victorze`)
  })


  it('it welcomes users without nickname', async () => {
    const res = await req.get('/welcome/Victor')

    expect(res.status).to.equal(200)
    expect(res.text).contain(`Welcome Victor`)
  })
})

