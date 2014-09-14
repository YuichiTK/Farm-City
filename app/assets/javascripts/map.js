$(document).ready(function() {
  if($('#map').length != 0) {
    handler = Gmaps.build('Google');
    handler.buildMap({ internal: {id: 'map'}}, function(){
      var markers = handler.addMarkers(nodes);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
      handler.getMap().setZoom(12);
      }
    );
    // var markersArray = [];
    // handler.map.callback = function() {
    //   var marker = Gmaps.Google.Objects.Map.markers[0];
    //   if (marker) {
    //     // Move existing marker when editing a previously stored location
    //     google.maps.event.addListener(marker.serviceObject, 'dragend', function() {
    //       updateFormLocation(this.getPosition());
    //     });
    //   }

    //   // On click, clear markers, place a new one, update coordinates in the form
    //   google.maps.event.addListener(Gmaps.map.serviceObject, 'click', function(event) {
    //     clearOverlays();
    //     placeMarker(event.latLng);
    //     updateFormLocation(event.latLng);
    //   });
    // };
    // // Update form attributes with given coordinates
    // function updateFormLocation(latLng) {
    //   $('#centre_latitude').val(latLng.lat());
    //   $('#centre_longitude').val(latLng.lng());
    //   $('#centre_gmaps_zoom').val(Gmaps.map.serviceObject.getZoom());
    // }
    // // Add a marker with an open infowindow
    // function placeMarker(latLng) {
    //   var marker = new google.maps.Marker({
    //     position: latLng,
    //     map: Gmaps.map.serviceObject,
    //     draggable: true
    //   });
    //   markersArray.push(marker);
    //   // Set and open infowindow
    //   var infowindow = new google.maps.InfoWindow({
    //     content: '<div class="popup"><h2>Awesome!</h2><p>Drag me and adjust the zoom level.</p>'
    //   });
    //   infowindow.open(Gmaps.map.serviceObject, marker);
    //   // Listen to drag & drop
    //   google.maps.event.addListener(marker, 'dragend', function() {
    //     updateFormLocation(this.getPosition());
    //   });
    // }
    // // Removes the overlays from the map, including the ones loaded with the map itself
    // function clearOverlays() {
    //   for (var i = 0; i < markersArray.length; i++ ) {
    //     markersArray[i].setMap(null);
    //   }
    //   markersArray.length = 0;

    //   for (var i = 0; i < Gmaps.map.markers.length; i++ ) {
    //     Gmaps.map.clearMarker(Gmaps.map.markers[i]);
    //   }
    // }
  }
});
