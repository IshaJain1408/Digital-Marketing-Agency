$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        alert('Form submitted successfully!');
        $('#contactModal').modal('hide');
    });
});
$(document).ready(function() {
    $('#contactUsButton').click(function() {
        $('#popupOverlay').show();
        $('#popupForm').fadeIn();
    });

    $('#popupOverlay').click(function() {
        $('#popupForm').fadeOut();
        $('#popupOverlay').hide();
    });

    $('#contactForm').submit(function(e) {
        e.preventDefault();

        const formData = {
            email: $('#email').val(),
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            agreeTerms: $('#agreeTerms').is(':checked')
        };

        axios.post('https://getform.io/f/your-form-endpoint', formData)
            .then(response => {
                alert('Form submitted successfully!');
                $('#popupForm').fadeOut();
                $('#popupOverlay').hide();
            })
            .catch(error => {
                alert('An error occurred while submitting the form.');
            });
    });
});
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
        const newImageSrc = item.getAttribute('data-image');
        document.getElementById('main-image').src = newImageSrc;
    });
});
$(document).ready(function () {
    $('#cardCarousel').on('slide.bs.carousel', function (event) {
        var index = $(event.relatedTarget).index();
        $('.dot').removeClass('active');
        $('.dot').eq(index).addClass('active');
    });
    
    $('.dot').click(function () {
        var slideIndex = $(this).index();
        $('#cardCarousel').carousel(slideIndex); 
        $('.dot').removeClass('active');
        $(this).addClass('active');
    });
});


