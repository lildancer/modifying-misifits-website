$("document").ready(function() {
      $ ("paths").hover(function($ ("arrive").show(function())));

  function initMap() {
    var waterfall = {lat: 51.929089, lng:-8.570961};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: waterfall,
      heading: 90,
      tilt: 45,
       mapTypeId: 'satellite'

      // 51.9315975,-8.5683233
    });
    var marker = new google.maps.Marker({
      position: waterfall,
      map: map
    });
  }
  $("#paths").hover(function ($ ("#arrive").show(function)));
})
