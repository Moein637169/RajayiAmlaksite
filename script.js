// Shared JavaScript across all pages
document.addEventListener('DOMContentLoaded', function() {
    console.log('Rajayi Real Estate loaded');

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Mobile menu toggle (will be used in navbar component)
    window.toggleMobileMenu = function() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    };

    // Property image gallery (for property detail page)
    if (document.querySelector('.property-gallery-thumbs')) {
        const thumbs = document.querySelectorAll('.property-gallery-thumbs img');
        const mainImage = document.querySelector('.property-gallery-main img');

        thumbs.forEach(thumb => {
            thumb.addEventListener('click', function() {
                mainImage.src = this.src.replace('-thumb', '');

                // Update active thumb
                thumbs.forEach(t => t.classList.remove('border-amber-500'));
                this.classList.add('border-amber-500');
            });
        });
    }

    // Price range slider (for properties page)
    const priceSlider = document.getElementById('price-range-slider');
    if (priceSlider) {
        noUiSlider.create(priceSlider, {
            start: [1, 5],
            connect: true,
            range: {
                'min': 0,
                'max': 10
            },
            step: 0.5,
            format: {
                to: function(value) {
                    return value + ' میلیارد';
                },
                from: function(value) {
                    return value.replace(' میلیارد', '');
                }
            }
        });

        const priceValues = [
            document.getElementById('price-min'),
            document.getElementById('price-max')
        ];

        priceSlider.noUiSlider.on('update', function(values, handle) {
            priceValues[handle].innerHTML = values[handle];
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !phone || !message) {
                alert('لطفاً تمام فیلدهای ضروری را پر کنید');
                return;
            }

            if (!/^09\d{9}$/.test(phone)) {
                alert('لطفاً شماره تلفن معتبر وارد کنید');
                return;
            }

            // Here you would typically send the form data to the server
            alert('پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.');
            contactForm.reset();
        });
    }
});

// Admin login function (for admin panel)
function adminLogin() {
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    if (username === 'MR_Rajayi' && password === 'Hesam14563') {
        window.location.href = 'admin-dashboard.html';
    } else {
        alert('نام کاربری یا رمز عبور اشتباه است');
    }
}