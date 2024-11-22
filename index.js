document.addEventListener('DOMContentLoaded', () => {
    const feedbackWidget = document.querySelector('.feedback-widget');
    const feedbackPanel = document.querySelector('.feedback-panel');
    const submitFeedbackBtn = document.getElementById('submit-feedback');
    const emojiButtons = document.querySelectorAll('.emoji-btn');
    const feedbackTextarea = document.querySelector('textarea');
    let selectedRating = null;

    
    feedbackWidget.addEventListener('click', () => {
        feedbackPanel.classList.toggle('active');
    });

    
    emojiButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedRating = button.getAttribute('data-rating');
            emojiButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    
    submitFeedbackBtn.addEventListener('click', () => {
        if (selectedRating || feedbackTextarea.value) {
            alert('Thank you for your feedback!');
            feedbackPanel.classList.remove('active');
            feedbackTextarea.value = ''; 
            selectedRating = null; 
        } else {
            alert('Please provide feedback before submitting.');
        }
    });
});
