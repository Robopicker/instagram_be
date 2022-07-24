const { expressjwt } = require("express-jwt");

exports.requireSignIn = expressjwt({
    secret: 'eyJhbGciOiJIUzUxMiJ9.e30.KCZ5m4MoRSeRA8kNBJyvTtoGwuedtmNqO6NSfK5OGy4XMTGPwC_8Tz_UK5yUlVQKZ0AuZq1-K-G9BOl1qMPYJw',
    algorithms: ['ES256']
})