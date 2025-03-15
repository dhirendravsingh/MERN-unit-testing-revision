import {describe, expect, it} from '@jest/globals'
import {sum, multiply} from '../index'

describe('sum module', () => { 
    it('adds 1 + 2 to equal 3', ()=>{
        expect(sum(1,2)).toBe(3)
    })

    it('should add two negative no. correctly', ()=>{
        expect(sum(-1,-2)).toBe(-3)
    })
 })

 describe('multiply module', ()=>{
    it('should multiply two no. correctly', ()=>{
        expect(multiply(2,3)).toBe(6)
    })
 })