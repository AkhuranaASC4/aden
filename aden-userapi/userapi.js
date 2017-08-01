// 
//

var apiURL = "https://randomuser.me/api/" 

$.ajax({
  url: apiURL,
  dataType: 'json',
  success: function(data) {
    console.log(data);
    console.log(data.info);
    var email=(data.results[0].email);
      var name=(data.results[0].name.first);
      var lastName=(data.results[0].name.last);
      var picture= (data.results[0].picture.large);
      var location= (data.results[0].location.state);
    $("body").append(`<h1>  This persons email is ${email}  </h1>`)
     $("body").append(`<h1>  This persons first name is ${name}.  </h1>`)
      $("body").append(`<h1>  This persons last name is ${name}.  </h1>`)
      $("body").append(`<img src='${picture}'>`)
    $("body").append(`<h1>  This person lives in ${location}.  </h1>`) 
  }
});