$(function () {

    $('#btn').on('click', function () {
        let name = $('#username').val();
        console.log(name);
        $.ajax({
            type: 'GET',
            url: 'https://api.github.com/users/'+name,
            success: function (res) {
                if (!res || !res.name) {
                    $('.user-details').hide();
                    $('#error').fadeIn();
                } else {
                    $('#error').hide();
                    $('.user-details').fadeIn();
                    $('#name h3').text(res.name);
                    $('#avatar-img').attr('src', res.avatar_url);
                    $('#email').text(res.email || 'not available');
                    $('#company').text(res.company || 'not available');
                    $('#blog').text(res.blog || 'not available');
                    $('#location').text(res.location || 'not available');
                    $('#bio').text(res.bio || 'Bio not available');
                    console.log(res.email, res.location)
                }
            },
            error: function (err) {
                $('#error').fadeIn();
            }
        })
    })
});
