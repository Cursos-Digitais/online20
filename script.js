// ============================================
// COUNTDOWN TIMER (OPCIONAL - SE QUISER REMOVER É SÓ APAGAR)
// ============================================

const countdownTime = 2 * 60 * 60 * 1000;
let endTime = new Date(Date.now() + countdownTime);

function updateCountdown() {
    const now = new Date();
    const timeLeft = endTime - now;
    
    if (timeLeft <= 0) {
        endTime = new Date(Date.now() + countdownTime);
    }
    
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.querySelectorAll('#hours, #final-hours').forEach(el => {
        if (el) el.textContent = hours.toString().padStart(2, '0');
    });
    
    document.querySelectorAll('#minutes, #final-minutes').forEach(el => {
        if (el) el.textContent = minutes.toString().padStart(2, '0');
    });
    
    document.querySelectorAll('#seconds, #final-seconds').forEach(el => {
        if (el) el.textContent = seconds.toString().padStart(2, '0');
    });
}

if (document.getElementById('hours')) {
    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// ============================================
// FAQ ACCORDION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('open');
            });
            
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('open');
            }
        });
    });
    
    if (faqQuestions.length > 0) {
        faqQuestions[0].classList.add('active');
        faqQuestions[0].nextElementSibling.classList.add('open');
    }
});

// ============================================
// WHATSAPP/EMAIL TRACKING
// ============================================
document.querySelectorAll('a[href*="whatsapp"], a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function() {
        if (typeof fbq !== 'undefined') fbq('track', 'Contact');
    });
});
