// Sample data for the chart
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
    labels: labels,
    datasets: [{
        label: 'Sales Data',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Render the chart
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 13); // Set initial view to London

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Add a marker to the map
const marker = L.marker([51.5, -0.09]).addTo(map);
marker.bindPopup('<b>Hello!</b><br>This is a marker.').openPopup();
