const { User } = require('../../db');

const getUserAccess = async (email, password) => {
    const emailFound = await User.findOne({ where: { email: email}});
    if(!emailFound){ throw Error ('Invalid date')};

    const passwordFound = await User.findOne({ where: { email: email, password:password }});
    if(!passwordFound){ throw Error ('Invalid dates')};

    return passwordFound;
};

module.exports = getUserAccess;