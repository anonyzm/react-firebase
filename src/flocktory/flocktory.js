const FLOCKTORY_PROXY_BASE_URL = 'http://localhost:3001/';
// Данные
const FLOCKTORY_SITE_ID = "1838";
const FLOCKTORY_SENDER_ID = 917923313784;

const apiCall = (endpoint, data) => {
    const url = FLOCKTORY_PROXY_BASE_URL + endpoint;
    var formBody = [];
    for (var property in data) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return fetch(url, {
        method: 'POST',
        //mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
    })
        .then((response) => response.json())
        .then((responseeData) => new Promise((resolve) => {
            resolve(responseeData);
        }))
        .catch((error) => {
            console.error('Error:', error);
        });
}

export const flocktoryInit = () =>
    apiCall('init', {
        siteId: FLOCKTORY_SITE_ID
    });

export const flocktoryPushAttach = (token, sessionId) =>
    apiCall('push-init', {
        siteId: FLOCKTORY_SITE_ID,
        token: token,
        sessionId: sessionId,
        senderId: FLOCKTORY_SENDER_ID
    });