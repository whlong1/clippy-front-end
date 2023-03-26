const chartData = {
  labels: labels,
  datasets: [
    {
      label: '# of Votes',
      data: [missing, pending, incomplete, complete],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
      cutout: '90%',
    },
  ],
}


const chartOptions = {
  responsive: false,
  maintainAspectRatio: false,
  layout: {},
  plugins: {
    legend: {
      display: true,
      position: "right",
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        padding: 18,
        paddingRight: 100,
        border: '1px solid red'
      }
    },
  },
}

export {
  chartData,
  chartOptions,
}