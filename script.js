/* Add your script here */


$(".cook").click(function(){
    $(this).text(function(i, v){
       return v === 'Start' ? 'Cooking' : 'Start'
    });
});
