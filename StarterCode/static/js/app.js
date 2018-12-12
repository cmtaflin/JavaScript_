
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

function submitAction(){

  // Prevent page from refreshing
  d3.event.preventDefault();

  //  Grab input date
  var inputElement = d3.select("#datetime.form-control");
  
  var inputValue= inputElement.property("value");
  console.log(inputValue);
  
  // display output in console
  var filterData = data.filter(ufo => ufo.datetime === inputValue);
  console.log(filterData);

  // clear prior table  
  document.getElementById("tablebody").innerHTML="";

  // Loop through all records for initial table build
  filterData.forEach(function(queryData){
    
    // Add rows for each record
    var row = tbody.append("tr");
      
    // Append one cell per record
    Object.entries(queryData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    })
  })
};


d3.select("#filter-btn").on("click",submitAction);
