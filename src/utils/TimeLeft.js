function timeLeft(startDate) {
    const now = new Date();
    const start = new Date(startDate);
    
    // Calculate the difference in milliseconds
    const diff = start - now;

    // Check if the event has already passed
    if (diff <= 0) {
        return 'Event Completed';
    }

    const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24)); // Calculate days left
    const hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calculate hours left
    const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes left

    return `${daysLeft}Days ${hoursLeft}Hrs ${minutesLeft}Min`;
}


export default timeLeft