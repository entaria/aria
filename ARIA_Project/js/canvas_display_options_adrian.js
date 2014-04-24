$( document ).ready(function() { 

					
					  // This generates a local storage file
					  var localData = JSON.stringify(sales);
					  window.localStorage.setItem('SalesData', localData);

					  var localData = JSON.parse(window.localStorage.getItem('SalesData'));
					  var datapoints = [];
					   
					  $(jQuery.parseJSON(JSON.stringify(localData))).each(function () {

					   
					  datapoints.push(
					   
					  { label: this.item, y: this.QtySold } 
					  );
					   
					  });
					  
					  CanvasJS.addColorSet("greenShades",
							 [//colorSet Array
							 "#00010D",
							 "brown",
							 "#FFBB55",
							 "#FFFAB9",
							 "#FFF60D",
							 "#BA8300",
							 "#75C8FF"
							]);
					
					
			  $("#doughnut").click(function doughnutChart() {
			  
					  


					  var chart = new CanvasJS.Chart("chartContainer", {
					  colorSet: "greenShades",
					  title: {
					  text: "Basic Column Chart - CanvasJS"
					  },
					  data: [
					  {
					  // Change type to "bar", "splineArea", "area", "spline", "pie",etc.
					  type: "doughnut",
					  dataPoints: datapoints
					  }
					  ]
					  });	
				  chart.render();
				  
			  });
			  
			  
			  $("#pie").click(function doughnutChart() {
				  var chart = new CanvasJS.Chart("chartContainer", {
					  
					  colorSet: "greenShades",
					  title:{
						  text: "Basic Column Chart - CanvasJS"              
					 },
					  data: [              
					  {
		// Change type to "bar", "splineArea", "area", "spline", "pie",etc.
						  type: "pie",
						  dataPoints: datapoints
					  }
					  ]
				  });

				  chart.render();
				  
			  });
			  
			  $("#column").click(function doughnutChart() {
				  var chart = new CanvasJS.Chart("chartContainer", {
					  
					  colorSet: "greenShades",
					  title:{
						  text: "Basic Column Chart - CanvasJS"              
					 },
					  data: [              
					  {
		// Change type to "bar", "splineArea", "area", "spline", "pie",etc.
						  type: "column",
						  dataPoints: datapoints
					  }
					  ]
				  });

				  chart.render();
				  
			  });
			  
			  $("#line").click(function doughnutChart() {
				  var chart = new CanvasJS.Chart("chartContainer", {
					  
					  colorSet: "greenShades",
					  title:{
						  text: "Basic Column Chart - CanvasJS"              
					 },
					  data: [              
					  {
		// Change type to "bar", "splineArea", "area", "spline", "pie",etc.
						  type: "line",
						  dataPoints: datapoints
					  }
					  ]
				  });

				  chart.render();
				  
			  });
			  
			  $("#area").click(function doughnutChart() {
				  var chart = new CanvasJS.Chart("chartContainer", {
					  
					  colorSet: "greenShades",
					  title:{
						  text: "Basic Column Chart - CanvasJS"              
					 },
					  data: [              
					  {
		// Change type to "bar", "splineArea", "area", "spline", "pie",etc.
						  type: "area",
						  dataPoints: datapoints
					  }
					  ]
				  });

				  chart.render();
				  
			  });
			  
			  $("#bar").click(function doughnutChart() {
				  var chart = new CanvasJS.Chart("chartContainer", {
					  
					  colorSet: "greenShades",
					  title:{
						  text: "Basic Column Chart - CanvasJS"              
					 },
					  data: [              
					  {
		// Change type to "bar", "splineArea", "area", "spline", "pie",etc.
						  type: "bar",
						  dataPoints: datapoints
					  }
					  ]
				  });

				  chart.render();
				  
			  });
			  
			  });