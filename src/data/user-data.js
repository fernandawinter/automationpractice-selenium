function generateRandomNumber() {
    return Math.ceil(Math.random() * 1000000);
}

module.exports = {
    EMAIL_ADDRESS: generateRandomNumber() + '@teste.com',
    FIRST_NAME: 'Fernanda',
    LAST_NAME: 'Winter',
    PASSWORD: '12345',
    ADDRESS: '305 May St',
    CITY: 'Marshalltown',
    STATE: 'Iowa',
    POSTAL_CODE: '50158',
    COUNTRY: 'Unites States',
    MOBILE_PHONE: '+1 651-772-3816',
    ADDRESS_ALIAS: 'My office'
};
