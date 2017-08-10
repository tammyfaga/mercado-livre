let IP = process.env.IP || 'localhost',
    PORT = process.env.PORT || 3001;

module.exports = {
    'jwt': {
        'expires': '3600h',
        'secret': 'dev-ml-tammy',
        'code': 'tk-ml-tammy'
    },
    'port': PORT,
    'host': IP,
    'uri': 'http://' + IP + ':' + PORT
};