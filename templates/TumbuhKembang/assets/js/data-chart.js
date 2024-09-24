// Chart
async function drawChart(){
  const ctxWeight = document.getElementById('weight_chart');
  const ctxHeight = document.getElementById('height_chart');
  const ctxHeadC = document.getElementById('headc_chart');

  const { weightValue, heightValue, headCircumferenceValue, ageValue } = await fetchBabyDatas()

  new Chart(ctxWeight, {
    type: 'line',
    data: {
      labels: ageValue,
      datasets: [{
        label: 'Berat Badan Anak',
        data: weightValue,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  new Chart(ctxHeight, {
    type: 'line',
    data: {
      labels: ageValue,
      datasets: [{
        label: 'Tinggi Badan Anak',
        data: heightValue,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  new Chart(ctxHeadC, {
    type: 'line',
    data: {
      labels: ageValue,
      datasets: [{
        label: 'Lingkar Kepala Anak',
        data: headCircumferenceValue,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

drawChart()