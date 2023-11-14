function init(){
  alert('it works');
  var el= document.getElementById('map');
  var myLocation = new google.maps.LatLng(34.025303,-118.328053);
  var mapOptions={
    center:myLocation,
    zoom:10,
    mapTypeControlOptions:{
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position:myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'images/cat_marker.png'
  });

  var contentString = '<h1>LA Trip place</h1>'
  var infowindow = new google.maps.InfoWindow({
    content:contentString
  });

  google.maps.event.addDomListener(marker, 'mouseover', function(){
    infowindow.open(myMap,marker);
  });
}

google.maps.event.addDomListener(window,'load',init);