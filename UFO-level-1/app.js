// Assign the data from `data.js` to a descriptive variable
var sightings = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);

  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
  var date_time = filteredData.map(sighting => sighting.datetime);
  var city_data = filteredData.map(sighting => sighting.city);
  var state_data = filteredData.map(sighting => sighting.state);
  var country_data = filteredData.map(sighting => sighting.country);
  var shape_data = filteredData.map(sighting => sighting.shape);
  var duration_data = filteredData.map(sighting => sighting.durationMinutes);
  var comments_data = filteredData.map(sighting => sighting.comments);

  console.log(date_time)


  // Then, select the unordered list element by class name
  var date_location = d3.select(".table-date");
  var city_location = d3.select(".table-city");
  var state_location = d3.select(".table-state");
  var country_location = d3.select(".table-country");
  var shape_location = d3.select(".table-shape");
  var duration_location = d3.select(".table-duration");
  var comments_location = d3.select(".table-comments");

  // remove any children from the list to
 // date_location.html("");
 // city_location.html("");
 // state_location.html("");
 // country_location.html("");
 // shape_location.html("");
 // duration_location.html(""); 
 // comments_location.html(""); 

  date_time.forEach((datapoint) => {
    date_location.append("tr").text(datapoint);
  })

  city_data.forEach((datapoint) => {
    city_location.append("tr").text(datapoint);
  })

  state_data.forEach((datapoint) => {
    state_location.append("tr").text(datapoint);
  })

  country_data.forEach((datapoint) => {
    country_location.append("tr").text(datapoint);
  })

  shape_data.forEach((datapoint) => {
    shape_location.append("tr").text(datapoint);
  })

  duration_data.forEach((datapoint) => {
    duration_location.append("tr").text(datapoint);
  })
 
  comments_data.forEach((datapoint) => {
    comments_location.append("tr").text(datapoint);
  })
};