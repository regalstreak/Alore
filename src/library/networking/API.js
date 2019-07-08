import Constants from "./Constants";

export const signup = (username, password) => {
    console.log("signup called")
    return fetch(Constants.BASE_URL + "signup", {
        method: "POST",
        headers: {
            ...Constants.HEADERS
        },
        body: JSON.stringify({
            "firstname": "",
            "lastname": "",
            "username": username,
            "password": password,
            "producturl": Constants.BASE_URL,
            "inviteeid": 0,
            "responseCodeJson": {
                "message": "",
                "errorcode": 0
            }
        })
    })
        .then(response => response.json())
        .then(responseJson => {
            console.log("JSONRESPONSE IS " + JSON.stringify(responseJson))
            return responseJson;
        })
        .catch(error => {
            console.error(error);
            return error;
        })
}
