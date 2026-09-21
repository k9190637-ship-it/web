// Contact Form Handling
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Validate form
        if (!data.name || !data.email || !data.phone || !data.message) {
            alert('يرجى ملء جميع الحقول المطلوبة');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('يرجى إدخال بريد إلكتروني صحيح');
            return;
        }

        // Phone validation
        const phoneRegex = /^[0-9]+$/;
        if (!phoneRegex.test(data.phone)) {
            alert('يرجى إدخال رقم هاتف صحيح');
            return;
        }

        // Simulate form submission
        alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
        contactForm.reset();
    });
}
