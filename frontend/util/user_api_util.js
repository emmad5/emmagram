export const update = (user) => (
    $.ajax({
        method: 'PATCH',
        url: 'api/users',
        data: { user }
    })
);

export const fetchUser = id  => (
    $.ajax({
        method: 'GET',
        url: `api/users/${id}`
    })
);