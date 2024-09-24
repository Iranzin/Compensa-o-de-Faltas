const faq = function() {
    
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                question.classList.remove('active');
                answer.classList.remove('open');
            } else {
                document.querySelectorAll('.faq-answer').forEach(answer => {
                    answer.style.maxHeight = null;
                    answer.classList.remove('open');
                });
                document.querySelectorAll('.faq-question').forEach(q => {
                    q.classList.remove('active');
                });

                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.classList.add('active');
                answer.classList.add('open');
            }
        });
    });
}

faq();