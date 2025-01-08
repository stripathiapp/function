function plot() {
  const functionStr = document.getElementById("function").value;

  const x = [];
  const y = [];

  // Generate data points
  for (let i = -10; i <= 10; i += 0.1) {
    x.push(i);
    try {
      y.push(eval(functionStr.replace(/x/g, i)));
    } catch (error) {
      console.error("Error evaluating function:", error); // Log error to console
      y.push(null); 
    }
  }

  // Define Plotly trace
  const trace = {
    x: x,
    y: y,
    type: 'scatter'
  };

  // Define layout
  const layout = {
    title: 'Function Plot',
    xaxis: {
      title: 'x'
    },
    yaxis: {
      title: 'y'
    }
  };

  // Create Plotly plot
  Plotly.newPlot('myDiv', [trace], layout);
}
