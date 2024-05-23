const emptyOrRows = rows => {
    if (!rows) {
        return [];
    }
    return rows;
};

export const camelCaseFields = user => {
    const {
        _id,
        user_name: userName,
        user_email: userEmail,
        user_username: userUsername,
    } = user;
    return ({
        _id,
        userName,
        userEmail,
        userUsername
    });
};

export const camelCaseResultsSet = rows => {
    return (rows.length === 0) ? [] : rows.map(user => camelCaseFields(user)); 
}

export const pascal_case_fields = newUser => (
    {
        user_name: newUser.userName,
        user_email: newUser.userEmail,
        user_username: newUser.userUsername,
        _id: newUser._id
    }
);