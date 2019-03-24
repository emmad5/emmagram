export const update = (user) => (
    $.ajax({
        method: 'PATCH',
        url: `api/users/${user.id}`,
        data: { user }
    })
);

export const fetchUser = id  => {
    console.log(id)
   return $.ajax({
        method: 'GET',
        url: `/api/users/${id}`
    });
};

