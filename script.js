// Wait for page to load before running the AJAX request
$(document).ready(function(){
  // This starts the AJAX request
  // The first parameter is the URL with the data
  // The second parameter is a function that handles the response
  // $.get('sentence.html', function(response){
  // Getting he element on the page with the ID of 'sentences' and inserting the response
  // $('#sentences').html(response);
  // });

  // Handling errors:
  $.get("this_doesnt_exist.html", function(data) {
    // This will not be called because the .html file request doesn't exist
    doSomethingGood();
  }).fail(function(error) {
    // This is called when an error occurs
    console.log('Something went wrong: ' + error);
  });

  // Another example of how to user jQuery to perform an Ajax request
  // var url = "https://api.github.com/repos/rails/rails/commits?sha=82885325e04d78fb7ec608a4670164d842d23078";

  // $.get(url)
  //   .done(function(data) {
  //     console.log("Done");
  //     console.log(data);
  //   });

  // Note: The callback that gets passed into .done gets data as an argument.
  // data represents the response returned from the API.
  // jQuery handles passing in that data object to the callbacks.
  // This is essential to our fire and forget technique. 
  // We don't have to sit around and wait for the API to give us a response.
  // Instead, we tell jQuery that when it receives a response to please pass it along to our callbacks so they can handle it accordingly.

});
