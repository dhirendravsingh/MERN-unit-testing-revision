import {describe, expect, it} from '@jest/globals'
import { app } from '../index'
//this library supertest is responsible for stimulating the requests being sent to the actual server
import request from "supertest"

describe("POST /sum", ()=>{
    it("should return the sum of two numbers", async ()=>{
        const res = await request(app).post("/sum").send({
            a : 1,
            b : 2
        })
        expect(res.statusCode).toBe(200)
        expect(res.body.answer).toBe(3)
    })
})


//usually if there is a false condition path, that is if there is zod used for input validation and there happens to be a case where wrong inputs are being fed, hence if that path is defined in the index file it has to be tested here as well.

//also if there is a condition of a GET endpoint and where the parameters are being passed in the headers, so in the tests we will have to pass the parameters by .get("/sum").set({ }).send()   , in the post request we do it via .post("/sum").send({ })