// 
//

var id = "2bce96fd"

var key = "da2f1c830348583f2fee2bd8239b7bf9"

var bigMacURL = "https://api.nutritionix.com/v1_1/search/Big%20Mac?results=0:5&fields=item_name,nf_calories&appId=" + id + "&appKey=" + key

$.ajax({
    url:bigMacURL,
    success:function(data){
        // console.log(data);
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;
        $("body").append("<h2> This " + name + " has " + cals + "kcal !!!</h2>")

   }
    
});