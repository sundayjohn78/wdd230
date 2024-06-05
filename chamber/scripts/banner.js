function showMeetGreetBanner() {
    const banner = document.getElementById('meet-greet-banner');
    const closeButton = document.querySelector('.close-banner');

    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

    if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
        banner.style.display = 'block';
    }

    closeButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', showMeetGreetBanner);
