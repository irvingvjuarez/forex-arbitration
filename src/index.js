const config = require("./config");

const API_ROOT = config.capitalDotCom.apiRoot;
const IDENTIFIER = config.capitalDotCom.identifier;
const PASSWORD = config.capitalDotCom.password;
const X_CAP_API_KEY = config.capitalDotCom.xCapApiKey;

(async function() {
    try {
        const sessionRequest = await fetch(`${API_ROOT}/session`, {
            method: 'POST',
            body: JSON.stringify({
                identifier: IDENTIFIER,
                password: PASSWORD
            }),
            headers: {
                'Content-Type': 'application/json',
                'X-CAP-API-KEY': X_CAP_API_KEY
            }
        });

        const cst = sessionRequest.headers.get('CST');
        // const session = await sessionRequest.json();

        console.log(cst);
    } catch(error) {
        console.error(error);
    }
})();