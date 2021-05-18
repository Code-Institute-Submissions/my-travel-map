var map, marker;

function initMap() {
  var mapOptions = {
    center: new google.maps.LatLng(53.33306, -6.260),
    zoom: 10,
  };
  map = new google.maps.Map(document.getElementById("map"),
    mapOptions);

  var blueIco = {
    url: "http://maps.google.com/mapfiles/ms/icons/blue.png",
    size: new google.maps.Size(55, 73),
    anchor: new google.maps.Point(28, 72)
  };

  var latLng = new google.maps.LatLng(53.33306, -6.260);

  marker = new google.maps.Marker({
    map: map,
    position: latLng,
    animation: google.maps.Animation.DROP,
    icon: blueIco,
    normalIcon: blueIco
  });

  google.maps.event.addListener(marker, "mouseout", function(event) {
    this.setIcon(this.normalIcon);
    infowindow.close();
  });
  $('.location').on('click', function() {
    var latlonStr = $(this).data('location')
    var coords = latlonStr.split(",");
    var latLng = new google.maps.LatLng(coords[0], coords[1]);
    pan(latLng);
    if (marker && marker.setMap) {
      marker.setMap(null);
    }
    marker = new google.maps.Marker({
      map: map,
      position: latLng,
      animation: google.maps.Animation.DROP,
      icon: blueIco,
      normalIcon: blueIco
    });


  });
}
google.maps.event.addDomListener(window, 'load', initialize);

function pan(latlon) {
  map.panTo(latlon)
}