const weekDates = document.querySelector('.week-head');
const tmp_today = new Date();
const today = new Date();
const firstDayOfWeek = new Date(tmp_today.setDate(tmp_today.getDate() - tmp_today.getDay() + 1));

const currentDayIndex = today.getDay() - 1; // Get current day index (0 for Monday, 6 for Sunday)

for (let i = 0; i < 7; i++) {
    const dateCell = document.createElement('div');
    dateCell.className = 'date';

    const currentDate = new Date(firstDayOfWeek);
    currentDate.setDate(firstDayOfWeek.getDate() + i);

    if (i === currentDayIndex) {
        dateCell.classList.add('highlight');
        weekDates.children[i].classList.add('highlight');
    }

    dateCell.textContent = currentDate.getDate();
    weekDates.appendChild(dateCell);
}







const gridContainer = document.querySelector('.grid-container');

for (let row = 1; row <= 24; row++) {
    const timeCell = document.createElement('div');
    timeCell.className = 'time-cell';
    const hour = row.toString().padStart(2, '0');
    if (row < 24) {
        timeCell.textContent = `${hour}:00`;
        }
    gridContainer.appendChild(timeCell);

    for (let col = 0; col < 7; col++) {
        const gridCell = document.createElement('div');
        gridCell.className = 'grid-cell';
        gridContainer.appendChild(gridCell);
    }
}

// Add red line
const redLine = document.createElement('div');
redLine.className = 'red-line';

// Calculate position of the red line
const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

const rowHeight = 40; // Height of each row in pixels
const linePosition = (hours * rowHeight) + (minutes / 60 * rowHeight);

redLine.style.top = `${linePosition}px`;

// Place in current day's column
const dayIndex = (currentDate.getDay() === 0 ? 6 : currentDate.getDay() - 1); // Adjust for Sunday
const dayWidth = gridContainer.offsetWidth / 7;


gridContainer.appendChild(redLine);
document.documentElement.style.setProperty("--currentDayIndex", dayIndex);
