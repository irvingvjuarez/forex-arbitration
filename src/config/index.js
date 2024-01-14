require('dotenv').config();

const config = {
    capitalDotCom: {
        apiKey: process.env.CAPITAL_DOT_COM_API_KEY,
        apiRoot: process.env.CAPITAL_DOT_COM_API_ROOT,
        customPassword: process.env.CAPITAL_DOT_COM_CUSTOM_PASSWORD,
        identifier: process.env.CAPITAL_DOT_COM_IDENTIFIER,
        password: process.env.CAPITAL_DOT_COM_PASSWORD,
        xCapApiKey: process.env.CAPITAL_DOT_COM_X_CAP_API_KEY,
        webSocketApiRoot: process.env.CAPITAL_DOT_COM_WEB_SOCKET_API_ROOT
    },
    ig: {
        apiKey: process.env.IG_API_KEY
    }
}

module.exports = config;