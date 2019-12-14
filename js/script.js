let ctx = document.getElementById('myChart').getContext('2d');
let   labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep" , "Oct", "Nov", "Dec"];
let colorHex = ['#FB3640', '#EFCA08', '#43AA8B', '#253D5B', '#52D726', '#FFEC00', 'blue', 'violet', 'brown', 'powderblue', 'purple', 'lightgreen'];

let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data : [5, 10, 15, 6, 4, 5, 10, 3, 7, 10, 15, 5],
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 4,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '12'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})