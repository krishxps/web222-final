document.addEventListener('DOMContentLoaded', function() {
    const hiringRadio = document.getElementById('hiring');
    const hourlyRate = document.getElementById('hourly_rate');

    hiringRadio.addEventListener('change', function() {
        if (this.checked) {
            hourlyRate.style.display = 'block';
        } else {
            hourlyRate.style.display = 'none';
        }
    });
});
