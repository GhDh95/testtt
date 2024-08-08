document.addEventListener('DOMContentLoaded', function () {
    // Get the context of the canvas element we want to select
    let ctx = document.getElementById('myPieChart').getContext('2d');

    // Create a new Chart instance
    const myPieChart = new Chart(ctx, {
        type: 'pie', // Specify the type of chart
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100, 40, 120, 60],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'white', // Change label color to white
                        font: {
                            size: 18 // Set the font size for the labels
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        title: function(tooltipItems) {
                            return tooltipItems[0].label; // Set tooltip title color to white
                        },
                        label: function(tooltipItem) {
                            return tooltipItem.dataset.label + ': ' + tooltipItem.raw; // Change tooltip text color
                        }
                    },
                    titleFont: {
                        color: 'white' // Set tooltip title color to white
                    },
                    bodyFont: {
                        color: 'white' // Set tooltip body color to white
                    },
                }
            }
        }
    });

    ctx = document.getElementById('chart2').getContext('2d');

    const chart2 = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Eating',
                'Drinking',
                'Sleeping',
                'Designing',
                'Coding',
                'Cycling',
                'Running'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 90, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
                label: 'My Second Dataset',
                data: [28, 48, 40, 19, 96, 27, 100],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        },
        options: {
            elements: {
                line: {
                    borderWidth: 3,
                    borderColor: 'white' // Set the border color of the lines to white
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'white' // Set the angle lines to white
                    },
                    grid: {
                        color: 'white', // Set the inner grid lines to white
                        lineWidth: 1 // Optionally adjust the line width
                    },
                    pointLabels: {
                        color: 'white' // Set the point labels to white
                    },
                    ticks: {
                        color: 'white', // Set the tick labels to white
                        backdropColor: 'rgba(0, 0, 0, 0)' // Set the backdrop color to transparent
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white' // Change label color to white
                    }
                }
            }
        },
    });

    ctx = document.getElementById('chart3').getContext('2d');
    const chart3 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        color: 'white' // Change x-axis tick color to white
                    }
                },
                y: {
                    ticks: {
                        color: 'white' // Change y-axis tick color to white
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white', // Change label color to white
                    }
                },
                tooltip: {
                    callbacks: {
                        title: function(tooltipItems) {
                            return tooltipItems[0].label; // Set tooltip title color to white
                        },
                        label: function(tooltipItem) {
                            return tooltipItem.dataset.label + ': ' + tooltipItem.raw; // Change tooltip text color
                        }
                    },
                    titleFont: {
                        color: 'white' // Set tooltip title color to white
                    },
                    bodyFont: {
                        color: 'white' // Set tooltip body color to white
                    },
                }
            }
        }
    });

    ctx = document.getElementById('chart4').getContext('2d');
    const myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Number of Patients',
                data: [12, 19, 3, 5, 2, 3, 7],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'white' // Change y-axis tick color to white
                    }
                },
                x: {
                    ticks: {
                        color: 'white' // Change x-axis tick color to white
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white', // Change label color to white
                    }
                },
                tooltip: {
                    callbacks: {
                        title: function(tooltipItems) {
                            return tooltipItems[0].label; // Set tooltip title color to white
                        },
                        label: function(tooltipItem) {
                            return tooltipItem.dataset.label + ': ' + tooltipItem.raw; // Change tooltip text color
                        }
                    },
                    titleFont: {
                        color: 'white' // Set tooltip title color to white
                    },
                    bodyFont: {
                        color: 'white' // Set tooltip body color to white
                    },
                }
            }
        }
    });

});


