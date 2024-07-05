document.addEventListener("DOMContentLoaded", () => {

    const progressDiv = document.getElementById("apprenticeship-progress");
    const startDate = new Date('2024-08-01');
    const finishDate = new Date('2027-08-01');
    const progress = calculateTotal(startDate, finishDate);

    progressDiv.style.width = `${progress}%`;

    const date = new Date();

    let innerText = this.calculateDaysBetween(startDate, date);
    if (innerText <= 0) {
        innerText = 0;
    }
    document.getElementById("apprenticeship-progress-text").innerText = innerText;
    document.getElementById("apprenticeship-progress-total").innerText = this.calculateDaysBetween(startDate, finishDate);

});

// Calculate the days until I finish my apprenticeship and block it until start
function calculateTotal(start, finish) {
    const currentDate = new Date();  // Current date can be dynamically set if needed

    const totalDays = calculateDaysBetween(start, finish);
    const daysCompleted = calculateDaysBetween(start, currentDate);

    let progress = (daysCompleted / totalDays) * 100;

    if (progress <= 0) {
        return 0
    }

    return progress;
}

function calculateDaysBetween(start, finish) {
    const millisecondsBetween = finish - start;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return millisecondsBetween / millisecondsPerDay;
}
