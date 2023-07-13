/// <reference types="Cypress" />



const dataJson = require('C:/Users/stefan.priala/Desktop/cytest/cypress/fixtures/createuser-post.json')

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
                'name':'stef test',
                'email':'stef@test.com',
                'gender':'male',
                'status':'active'

            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('email','stef@test.com')
        })

    })

    it('create user with random variables', ()=>{

        var pattern ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
        for (var i = 0; i<10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random()* pattern.length))
        testEmail = randomText + '@mailinator.com'

        cy.request({

            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'authorization' : 'Bearer ' + accessToken
            },
            body:{
                'name':'stef test',
                'email': testEmail,
                'gender':'male',
                'status':'active'

            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('email', testEmail)
        })

    })


    it('create user with fixtures', ()=>{

        var pattern ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
        for (var i = 0; i<10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random()* pattern.length))
        testEmail = randomText + '@mailinator.com'

        cy.request({

            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'authorization' : 'Bearer ' + accessToken
            },
            body:{
                'name':dataJson.name,
                'email': testEmail,
                'gender':dataJson.gender,
                'status':dataJson.status

            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('email', testEmail)
        })

    })

    it('create user with fixtures', ()=>{

        var pattern ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
        for (var i = 0; i<10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random()* pattern.length))
        testEmail = randomText + '@mailinator.com'

        cy.fixture('createuser').then((payload)=>{

        cy.request({

            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'authorization' : 'Bearer ' + accessToken
            },
            body:{
                'name':payload.name,
                'email': testEmail,
                'gender':payload.gender,
                'status':payload.status

            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('email', testEmail)

        }).then((res)=>{

            const userID = res.body.data.id
            cy.log("user id is: "+ userID)

            cy.request({

                method: 'POST',
            url: 'https://gorest.co.in/public/v1/users/'+userID,
            headers: {
                'authorization' : 'Bearer ' + accessToken
            }.then((res)=>{

                expect(res.status).to.eq(200)
                expect(res.body.data).has.property('email', testEmail)
                expect(res.body.data).has.property('id', userID)


            })
            
            })
        })
        })
    })

    /////////////////////////////////////


        
    it('create user with random variables', ()=>{

        var pattern ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
        for (var i = 0; i<10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random()* pattern.length))
        testEmail = randomText + '@mailinator.com'

        cy.request({

            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'authorization' : 'Bearer ' + accessToken
            },
            body:{
                'name':'stef test',
                'email': testEmail,
                'gender':'male',
                'status':'active'

            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('email', testEmail)
            expect(res.body.data).has.property('name', 'stef test')
            expect(res.body.data).has.property('status', 'active')
        }).then((res)=>{

            const userID = res.body.data.id
            cy.log("user id is: "+ userID)

            cy.request({

                method: 'GET',
            url: 'https://gorest.co.in/public/v1/users/'+userID,
            headers: {
                'authorization' : 'Bearer ' + accessToken
            }
        }).then((res)=>{

                expect(res.status).to.eq(200)
                expect(res.body.data).has.property('email', testEmail)
                expect(res.body.data).has.property('id', userID)
                expect(res.body.data).has.property('name', 'stef test')

            })
            
            })
        })




        it.only('create user with fixtures', ()=>{

            var pattern ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
            for (var i = 0; i<10; i++)
            randomText+=pattern.charAt(Math.floor(Math.random()* pattern.length))
            testEmail = randomText + '@mailinator.com'
    



                cy.request({
    
                    method: 'POST',
                    url: 'https://gorest.co.in/public/v1/users',
                    headers: {
                        'authorization' : 'Bearer ' + accessToken
                    },
                    body:{
                        'name':dataJson.name,
                        'email': testEmail,
                        'gender':dataJson.gender,
                        'status':dataJson.status
                    }
                
                }).then((res)=>{
                        expect(res.status).to.eq(201)
                        expect(res.body.data).has.property('email', testEmail)
                        expect(res.body.data).has.property('name', dataJson.name)

                }).then((res)=>{
        
                        const userID = res.body.data.id
                        cy.log("user id is: "+ userID)
            
                        cy.request({
            
                        method: 'GET',
                        url: 'https://gorest.co.in/public/v1/users/'+userID,
                        headers: {
                            'authorization' : 'Bearer ' + accessToken
                        }
                }).then((res)=>{
            
                            expect(res.status).to.eq(200)
                            expect(res.body.data).has.property('email', testEmail)
                            expect(res.body.data).has.property('id', userID)
                            expect(res.body.data).has.property('name', dataJson.name)
            
                })
                        
                })    


            })
            
            
    
        
        
    })

