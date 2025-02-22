// Ticket Counter Logic
const totalTickets = 150; // Total tickets available
let soldTickets = 105;     // Tickets already sold

const progressBar = document.getElementById("progress-bar");
const remainingTickets = document.getElementById("remaining-tickets");

// Update Progress Bar
function updateTicketProgress() {
    const ticketsLeft = totalTickets - soldTickets;
    const percentage = (soldTickets / totalTickets) * 100;

    remainingTickets.textContent = ticketsLeft;
    progressBar.style.width = `${percentage}%`;

    // Fun messages based on urgency
    if (ticketsLeft <= 10) {
        document.getElementById("ticket-info").innerHTML = "🔥 <strong>Almost Sold Out!</strong> Only <span id='remaining-tickets'>" + ticketsLeft + "</span> left!";
    } else if (ticketsLeft <= 50) {
        document.getElementById("ticket-info").innerHTML = "🚀 <strong>Going Fast!</strong> <span id='remaining-tickets'>" + ticketsLeft + "</span> tickets left!";
    }
}

updateTicketProgress();
