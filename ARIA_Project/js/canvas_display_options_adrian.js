$( document ).ready(function() {
			  $("#doughnut").click(function doughnutChart() {
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
						  type: "doughnut",
						  dataPoints: [
						  { label: "apple", y: 10 },
						  { label: "orange", y: 15 },
						  { label: "banana", y: 25 },
						  { label: "mango", y: 30 },
						  { label: "grape", y: 28 }
						  ]
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
						  dataPoints: [
						  { label: "apple", y: 10 },
						  { label: "orange", y: 15 },
						  { label: "banana", y: 25 },
						  { label: "mango", y: 30 },
						  { label: "grape", y: 28 }
						  ]
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
						  dataPoints: [
						  { label: "apple", y: 10 },
						  { label: "orange", y: 15 },
						  { label: "banana", y: 25 },
						  { label: "mango", y: 30 },
						  { label: "grape", y: 28 }
						  ]
					  }
					  ]
				  });

				  chart.render();
				  
			  });
			  });