
// code clears html meta data
// .html("") to clear any existing metadata

//Variable can hold values as well as actions

// from data.js
var sightings = data;

// selcect the location of the table in HTML
var tbody = d3.select("#tablebody");

// Loop through all records for initial table build
sightings.forEach((sightings)=>{
  
  // Add rows for each record
  var row = tbody.append("tr");
      
  // Append one cell per record
  Object.entries(sightings).forEach(([key, value]) => {
  var cell = row.append("td");
  cell.text(value);
  })
});








//   function pageReload()
// {  
//   function dateFilter()
//   {
//     // d3.event.preventdefault()
//     html(" ")
//     var inputElement = d3.select("#datetime.form-control");
//     //console.log(inputElement);
//     var inputValue = inputElement.property("value");
//     console.log(inputValue);
//     var filterdata = data.filter(data => data.datetime === inputValue);	
//     buildTbl(filterdata);
//   };
//   pageReload(tableData);
// };



// click_submit.on("click", dateFilter());












// -------------------------------
// // OLD that worked with submit button
// // // import data from data.js
// var tableData = data;

// var submit = d3.select("#filter-btn");


// submit.on("click",function(){  
  

//   d3.event.preventDefault();
//   var inputElement = d3.select("#datetime.form-control");
//   console.log(inputElement);
//   var inputValue = inputElement.property("value");
//   console.log(inputValue);

//   var filterdata = data.filter(data => data.datetime === inputValue);
//   console.log(filterdata);

//   var tbody = d3.select("tbody");
//   filterdata.forEach(function(queryData) {
//       // console.log(queryData);
//       var row = tbody.append("tr");
//       Object.entries(queryData).forEach(function([key, value]) {
//         console.log(key, value);
//         var cell = row.append("td");
//         cell.text(value);
        
//       });
//     });      
// });


// function clickFilter()
// {
// 	d3.event.preventDefault();
// 	var filterdata = data.filter(data => data.datetime === inputValue);	
// 	tbody.html("")
// 	buildTbl.(filterdata);
// };
// d3.select("#filter-btn").on("click",clickFilter());


