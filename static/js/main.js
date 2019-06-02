$(document).ready(function(){
    const url = "http://localhost:3000/api";
        $.ajax({
            url: url,
            type: "GET",
            success: function(result){
                console.log(result[0]);
                populate(result);
            },
            error: function(error){
                console.log("Error ${error}")
            }
        
    });
});
var count = document.getElementById("the-count");
function populate(result) {
    
    count.innerHTML = "Count: " + result[0].count;
    console.log(count);
}

$(".click").click(function(){
    const url = "http://localhost:3000/api";
        $.ajax({
            url: url,
            type: "PUT",
            success: function(result){
                console.log(result);
                populate2(result);
                
            },
            error: function(error){
                console.log("Error ${error}")
            }
    })
})

function populate2(result) {
    var ticker = result.count + 1;
    count.innerHTML = "Count: " + ticker;
    console.log(count);
}