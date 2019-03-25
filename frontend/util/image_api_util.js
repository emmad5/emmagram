export const createImage = (formData) => (
    $.ajax({
        url: '/api/images',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    })
);