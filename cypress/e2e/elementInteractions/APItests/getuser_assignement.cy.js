/// <reference types="Cypress" />


describe('get api user test', () =>{

    let accessToken = "6d2374bd4f7a6623ae1651380fa640313b747558ccc803f04884699f89c802db"

    it('get users', ()=>{

        cy.request({

            method: 'GET',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'authorization' : 'Bearer ' + accessToken
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(10)
        })

    })

    it('get users by id', ()=>{

        cy.request({

            method: 'GET',
            url: 'https://gorest.co.in/public/v1/users/3582397',
            headers: {
                'authorization' : 'Bearer ' + accessToken
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Soma Marar')
            expect(res.body.data.email).to.eq('marar_soma@lang.example')
            expect(res.body.data.gender).to.eq('female')
            expect(res.body.data.status).to.eq('active')
        })

    })

})