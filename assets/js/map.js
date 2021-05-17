function initMap() {
    
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: { lat: 53.33306 , lng: -6.260 },
    

    
  })};

  function marker(place) {
      // The marker, positioned at Uluru
const marker = new google.maps.Marker({
  position: place,
  
  map: map,
});
  }


