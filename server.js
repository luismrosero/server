const data = require('ttn').data;
const application = require('ttn').application

const appID = "prueba-nueve"
const accessKey = "NNSXS.4TXTLG2ENYMAQJYQSQWHCKLECRZZUZVLME2T4WA.NKHNWPOTSR625LOJS2EOJX4OSBXKSR5WUVTL2NKNDLVGQMJKPAVA"


// discover handler and open mqtt connection
data(appID, accessKey)
    .then(function (client) {
        client.on("uplink", function (devID, payload) {
            console.log("Received uplink from ", devID)
            console.log(payload)
        })
    })
    .catch(function (err) {
        console.error(err)
        process.exit(1)
    })

// discover handler and open application manager client
application(appID, accessKey)
    .then(function (client) {
        return client.get()
    })
    .then(function (app) {
        console.log("Got app", app)
    })
    .catch(function (err) {
        console.error(err)
        process.exit(1)
    })