// 
//

var apiURL = "https://randomuser.me/api/" 
var urlTwo = "https://restcountries.eu/rest/v2/alpha?codes="
var place;

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
      place = (data.results[0].nat);
      // location country code to get full name of the country 
      //do another call to API, urlTwo
    handleData()
    $("body").append(`<h1>  This persons email is ${email}  </h1>`)
     $("body").append(`<h1>  This persons first name is ${name}.  </h1>`)
      $("body").append(`<h1>  This persons last name is ${lastName}.  </h1>`)
      $("body").append(`<img src='${picture}'>`)
    $("body").append(`<h1>  This person lives in the Country Code: ${place}  </h1>`) 
  



  }
});

function handleData(){
    $.ajax({
        url: urlTwo + place,
        dataType: 'json',
        success: function (data) {
            var country=(data[0].name)
            var flag = (data[0].flag)
       $("body").append(`<h1>  This person lives in: ${country}  </h1>`) 
       $("body").append(`<h1> This is the flag: <br> <img src=${flag} </h1>`)
        }

    })


}

