$( document ).ready(function() { 

					

					var localData = JSON.stringify(sales);
					  window.localStorage.setItem('SalesData', localData);

					  var localData = JSON.parse(window.localStorage.getItem('SalesData'));
					  var datapoints = [];
					   
					  $(jQuery.parseJSON(JSON.stringify(localData))).each(function () {

					   
					  datapoints.push(
					   
					  { label: this.item, y: this.QtySold } 
					  );
					   
					  });
					
					
			  $("#doughnut").click(function doughnutChart() {
			  
					  


					  var chart = new CanvasJS.Chart("chartContainer", {
					  theme: "theme2",//theme1
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
					  animationEnabled: false,
					  interactivityEnabled: false,
					  
					  theme: "theme2",//theme1
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
					  animationEnabled: false,
					  interactivityEnabled: false,
					  
					  theme: "theme2",//theme1
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
					  animationEnabled: false,
					  interactivityEnabled: false,
					  
					  theme: "theme2",//theme1
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
			  
			  $("#bubble").click(function doughnutChart() {
				  var chart = new CanvasJS.Chart("chartContainer", {
					  animationEnabled: false,
					  interactivityEnabled: false,
					  
					  theme: "theme2",//theme1
					  title:{
						  text: "Basic Column Chart - CanvasJS"              
					 },
					  data: [              
					  {
		// Change type to "bar", "splineArea", "area", "spline", "pie",etc.
						  type: "bubble",
						  dataPoints: datapoints
					  }
					  ]
				  });

				  chart.render();
				  
			  });
			  
			  $("#bar").click(function doughnutChart() {
				  var chart = new CanvasJS.Chart("chartContainer", {
					  animationEnabled: false,
					  interactivityEnabled: false,
					  
					  theme: "theme2",//theme1
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