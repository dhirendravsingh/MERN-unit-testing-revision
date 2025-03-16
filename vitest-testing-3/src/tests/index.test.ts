import {describe, expect, it, vi} from 'vitest'
import { app } from '../index'
//this library supertest is responsible for stimulating the requests being sent to the actual server
import request from "supertest"
import { prismaClient } from '../db'

vi.mock('../db', ()=>({
    prismaClient : {sum : {create : vi.fn()}}
}))

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