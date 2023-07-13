/// <reference types="Cypress" />


describe('get api user test', () =>{

    let accessToken = "6d2374bd4f7a6623ae1651380fa640313b747558ccc803f04884699f89c802db"
    let randomText = ""
    let testEmail = ""



    it('create user test - hardcoded', ()=>{

        cy.request({

            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'authorization' : 'Bearer ' + accessToken
            },
            body:{
                'name':'stef test21',
                'email':'stefannnn1@test21.com',
                'gender':'male',
                'status':'active'

            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('email','stefannnn1@test21.com')
        }).then((res)=>{


            const userID = res.body.data.id
            cy.log("user id is:", +userID)

            cy.request({

                method: 'PUT',
                url: 'https://gorest.co.in/public/v1/users/'+userID,
                headers: {
                     'authorization' : 'Bearer ' + accessToken
                },
                body:{
                     'name':'stef test after update',
                     'email':'UPDATEDstefannnn1@test21.com',
                     'gender':'male',
                     'status':'inactive'
                }
            }).then((res)=>{
                    expect(res.status).to.eq(200)
                    expect(res.body.data).has.property('email','UPDATEDstefannnn1@test21.com')

            })
        })

    })
})