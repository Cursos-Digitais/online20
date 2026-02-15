// ============================================
// 1. COUNTDOWN TIMER
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

setInterval(updateCountdown, 1000);
updateCountdown();

// ============================================
// 2. NOTIFICAÇÕES DE VENDAS
// ============================================
const salesNotifications = [
    "✅ Maria S. acabou de adquirir o ebook!",
    "✅ João P. comprou o pacote completo!",
    "✅ Ana L. garantiu sua vaga com desconto!",
    "✅ Carlos R. acabou de fazer a compra!"
];

let notificationIndex = 0;

function showSalesNotification() {
    const notification = document.getElementById('salesNotification');
    if (!notification) return;
    
    const span = notification.querySelector('.notification-content span');
    notification.classList.add('show');
    span.innerHTML = salesNotifications[notificationIndex];
    notificationIndex = (notificationIndex + 1) % salesNotifications.length;
    
    setTimeout(() => notification.classList.remove('show'), 5000);
}

setTimeout(showSalesNotification, 3000);
setInterval(showSalesNotification, 20000);

// ============================================
// 3. CONTADOR ANIMADO
// ============================================
function animateCounters() {
    document.querySelectorAll('.counter-number').forEach(counter => {
        const target = parseInt(counter.dataset.target);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 30);
    });
}

document.addEventListener('DOMContentLoaded', animateCounters);

// ============================================
// FAQ ACCORDION - SIMPLES
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Fecha todos
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.style.display = 'none';
            });
            
            // Abre o atual se não estava ativo
            if (!isActive) {
                this.classList.add('active');
                answer.style.display = 'block';
            }
        });
    });
    
    // Abre o primeiro por padrão
    const firstQuestion = document.querySelector('.faq-question');
    if (firstQuestion) {
        firstQuestion.classList.add('active');
        firstQuestion.nextElementSibling.style.display = 'block';
    }
});

// ============================================
// WHATSAPP TRACKING (OPCIONAL)
// ============================================
document.querySelectorAll('a[href*="whatsapp"]').forEach(link => {
    link.addEventListener('click', function() {
        if (typeof fbq !== 'undefined') fbq('track', 'Contact');
    });
});
