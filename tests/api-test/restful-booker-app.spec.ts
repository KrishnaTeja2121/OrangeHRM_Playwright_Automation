import {test} from '../../fixtures/pom-fixtures'

test('API Test', async ({request})=>{
    const bookingIds=await request.get('https://restful-booker.herokuapp.com/booking/');
    console.log(await bookingIds.json());

})