// // import data from data.js
var tableData = data;

var submit = d3.select("#filter-btn");

submit.on("click",function(popTable){
    
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime.form-control");
    console.log(inputElement);
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filterdata = data.filter(data => data.datetime === inputValue);
    console.log(filterdata);

    var tbody = d3.select("tbody");
    filterdata.forEach(function(queryData) {
        // console.log(queryData);
        var row = tbody.append("tr");
        Object.entries(queryData).forEach(function([key, value]) {
          console.log(key, value);
          var cell = row.append("td");
          cell.text(value);
        });
      });      
});