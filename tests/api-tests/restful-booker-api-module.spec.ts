import { test, expect } from '../../fixtures/hooks-fixture'
import apiPathData from '../../data/api-data/api-path-data.json';
import restfulApiData from '../../data/api-data/restful-booker-api-module-data.json'

test("API Testing", async ({ request }) => {
    const bookingIds = await request.get('booking');
    console.log(await bookingIds.json());
})

// test("API test 2", async ({ request }) => {
//     const bookingDetails = await request.get("booking/1");
//     console.log(await bookingDetails.json());
// })

test("Id - 8 - [Restful-Booker > Booking] Verify that the user is able to fetch all the booking IDs using GET API and receive valid response.", {
    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: "https://dev.azure.com/wishinfinite/WishInfinite/_workitems/edit/8"
    }
}, async ({ request }) => {
    const bookingIdsResp = await request.get(apiPathData.booking_path);
    const boookingIdsJsonResp = await bookingIdsResp.json();
    console.log(boookingIdsJsonResp);
    expect(bookingIdsResp.status()).toBe(200);
    expect(bookingIdsResp.statusText()).toBe('OK');
    //expect(bookingIdsResp.ok()).toBeTruthy();
    expect(boookingIdsJsonResp).not.toBeNull();
    expect(bookingIdsResp.headers()['content-type']).toBe(restfulApiData.content_type);
})

test("Id - 9 - [Restful-Booker > Booking] Verify that the user is able to fetch booking details for a booking id using GET API and receives valid response.", {
    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: "https://dev.azure.com/wishinfinite/WishInfinite/_workitems/edit/9/"
    }
}, async ({ request }) => {
    const bookingResp = await request.get(`${apiPathData.booking_path}/${restfulApiData.booking_id}`);
    const bookingJsonResp = await bookingResp.json();
    console.log(bookingJsonResp);
    expect(bookingResp.status()).toBe(200);
    expect(bookingResp.statusText()).toBe("OK");
    expect(bookingResp).not.toBeNull();
    expect(bookingJsonResp.firstname).toEqual(restfulApiData.firstname);
})

test("Id - 10 - [Restful-Booker > Booking] Verify that the user is able to Create new booking using Post API and receive valid response.", {
    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: "https://dev.azure.com/wishinfinite/WishInfinite/_workitems/edit/10/"
    }
}, async ({ request }) => {
    const createBookingResp = await request.post(apiPathData.booking_path, {
        data: restfulApiData.create_booking
    });
    const createBookingJsonResp = await createBookingResp.json();
    console.log(createBookingJsonResp)
    expect(createBookingResp.status()).toBe(200);
    expect(createBookingJsonResp.booking).toMatchObject(restfulApiData.create_booking)
})

test("Id - 11 - [Restful-Booker > Booking] Verify that the user is able to Update existing booking using Put API and receive valid response.", {
    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: "https://dev.azure.com/wishinfinite/WishInfinite/_workitems/edit/11/"
    }
}, async ({ request, commonApiUtils }) => {
    const tokenValue = await commonApiUtils.createToken();
    const updateBookingResp = await request.put(`${apiPathData.booking_path}/${restfulApiData.booking_id2}`, {
        headers: {
            Cookie: `token=${tokenValue}`
        },
        data: restfulApiData.update_booking
    });
    const updateBookingJsonResp = await updateBookingResp.json();
    console.log(updateBookingJsonResp);
    expect(updateBookingResp.status()).toBe(200);
    expect(updateBookingJsonResp).toMatchObject(restfulApiData.update_booking)
})

test('Id -12 - [Restful-Booker > Booking] Verify that the user is able to partially update existing booking using PATCH API and receive valid response.', {
    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: "https://dev.azure.com/wishinfinite/WishInfinite/_workitems/edit/12/"
    }
}, async ({ request, commonApiUtils }) => {
    const apiToken = await commonApiUtils.createToken();
    const partialUpdateBookingResp = await request.patch(`${apiPathData.booking_path}/${restfulApiData.booking_id2}`, {
        headers: {
            Cookie: `token=${apiToken}`
        },
        data: restfulApiData.update_partial_booking
    });
    const partialUpdateBookingJsonResp = await partialUpdateBookingResp.json();
    expect(partialUpdateBookingResp.status()).toBe(200);
    expect(partialUpdateBookingJsonResp.firstname).toMatch(restfulApiData.update_partial_booking.firstname);
    expect(partialUpdateBookingJsonResp.lastname).toMatch(restfulApiData.update_partial_booking.lastname)
})

test('Id - 13 - [Restful-Booker > Booking] Verify that the user is able to delete existing booking using Delete API and receive valid response.', {
    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: "https://dev.azure.com/wishinfinite/WishInfinite/_workitems/edit/13/"
    }
}, async ({ request, commonApiUtils }) => {
    const apiToken = await commonApiUtils.createToken();
    const deleteBookingResp = await request.delete(`${apiPathData.booking_path}/${restfulApiData.bookingId3}`, {
        headers: {
            Cookie: `token=${apiToken}`
        }
    })
    expect(deleteBookingResp.status()).toBe(201);
    expect(deleteBookingResp.statusText()).toBe("Created");
    const getBookingResp = await request.get(`${apiPathData.booking_path}/${restfulApiData.bookingId3}`)
    expect(getBookingResp.status()).toBe(404);
    expect(getBookingResp.statusText()).toBe("Not Found")
})