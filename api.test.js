const apiController = require('./controllers/api');
const userData = {
    "id": 0,
    "name": "string",
    "email": "string",
    "address_geo_lat": "string",
    "address_geo_lng": "string"
}

test('should return UserData if valid userid passed', () => {
    expect(apiController.getUserById(1)).not.toEqual({ 
        id: expect.any(Number),  
        name: expect.any(String),  
        email: expect.any(String),  
        address_geo_lat: expect.any(String),  
        address_geo_lng: expect.any(String),  
    })
})

test('should return error if userid is invalid(string)', () => {
    expect(apiController.getUserById('A')).not.toEqual({ statusCode:'error', message:'Bad request' })
})