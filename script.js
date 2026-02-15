// ============================================
// FAQ ACCORDION - CORRIGIDO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Abre o primeiro item por padrão
    if (faqQuestions.length > 0) {
        const firstAnswer = faqQuestions[0].nextElementSibling;
        const firstIcon = faqQuestions[0].querySelector('i');
        faqQuestions[0].classList.add('active');
        if (firstAnswer) firstAnswer.style.display = 'block';
        if (firstIcon) firstIcon.style.transform = 'rotate(180deg)';
    }
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            const isActive = this.classList.contains('active');
            
            // Fecha todas as outras
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                if (q.nextElementSibling) {
                    q.nextElementSibling.style.display = 'none';
                }
                const qIcon = q.querySelector('i');
                if (qIcon) qIcon.style.transform = 'rotate(0deg)';
            });
            
            // Abre a atual se não estava ativa
            if (!isActive) {
                this.classList.add('active');
                if (answer) answer.style.display = 'block';
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});

// ============================================
// COUNTDOWN TIMER (OPCIONAL)
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
// WHATSAPP/EMAIL TRACKING
// ============================================
document.querySelectorAll('a[href*="whatsapp"], a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function() {
        if (typeof fbq !== 'undefined') fbq('track', 'Contact');
    });
});
