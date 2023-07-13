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
                'name':' test2 add for delete',
                'email':'ste2fannn@test2.com',
                'gender':'male',
                'status':'active'

            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('email','ste2fannn@test2.com')
        }).then((res)=>{


            const userID = res.body.data.id
            cy.log("user id is:", +userID)

            cy.request({

                method: 'DELETE',
                url: 'https://gorest.co.in/public/v1/users/'+userID,
                headers: {
                     'authorization' : 'Bearer ' + accessToken
                }
                })
            }).then((res)=>{
                    expect(res.status).to.eq(204)

            })
        })

    })
