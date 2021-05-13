let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}


$(".button-card-1").click(function(){
   $(".par-1").slideToggle(750); 
});
$(".button-card-2").click(function(){
   $(".par-2").slideToggle(750); 
});
$(".button-card-3").click(function(){
   $(".par-3").slideToggle(750); 
});
$(".button-card-4").click(function(){
   $(".par-4").slideToggle(750); 
});






