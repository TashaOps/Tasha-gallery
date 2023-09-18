var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://user-1:user1@cluster0.ck1dlgp.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://user-1:user1@cluster0.ck1dlgp.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://user-1:user1@cluster0.ck1dlgp.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;
