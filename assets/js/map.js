var map, marker;
const dublin = {lat:53.333, lng: -6.260}

function initMap() {
  var mapOptions = {
    center: dublin,
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
  const centerControlDiv = document.createElement("div");
  CenterControl(centerControlDiv, map);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
}
google.maps.event.addDomListener(window, 'load', initialize);

function pan(latlon) {
  map.panTo(latlon)
}

function CenterControl(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");
  controlUI.style.backgroundColor = "#fff";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "3px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "8px";
  controlUI.style.marginBottom = "22px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);
  // Set CSS for the control interior.
  const controlText = document.createElement("div");
  controlText.style.color = "rgb(25,25,25)";
  controlText.style.fontFamily = "Helvetica,sans-serif";
  controlText.style.fontSize = "16px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "Center Map";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Dublin.
  controlUI.addEventListener("click", () => {
    map.setCenter(dublin);
  });
}