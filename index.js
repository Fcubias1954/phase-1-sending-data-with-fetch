const userData = {
    name: "Steve",
    email: "steve@steve.com",
};
const configObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(userData),
};

function submitData(name, email) {
    return fetch("http://localhost:3000/users", configObject)
            .then(function (response) {
                return response.json();
            })
            .then(function (object) {
                console.log(object);
                const body = document.querySelector("body")
                console.log(body)
                body.append(object.id);
            })
            .catch(function (error) {
                alert("Unauthorized Access");
                const message = document.querySelector("body")
                message.append(error.message)
                console.log(error.message);
            });
};

