function init(){
  var el= document.getElementById('map');
  var iconimg = 'images/cat_marker.png';
  var bounce_ani = google.maps.Animation.BOUNCE;
  var myLocation = new google.maps.LatLng(34.07483820292655, -118.40209362753376);
  var mapOptions={
    center:myLocation,
    zoom:10,
    mapTypeControlOptions:{
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);

  //Santa Monica Marker
  var marker_sm = new google.maps.Marker({
    position:new google.maps.LatLng(34.00993246109917, -118.49913366580247),
    map: myMap,
    animation: bounce_ani,
    icon: iconimg
  });

  var infowindow_sm = new google.maps.InfoWindow({
    content:'<p>Santa Monica</p>'
  });

  google.maps.event.addDomListener(marker_sm, 'mouseover', function(){
    infowindow_sm.open(myMap,marker_sm);
  });

  //Hollywood Sign
  var marker_hy = new google.maps.Marker({
    position:new google.maps.LatLng(34.13416341181732, -118.32154780794004),
    map: myMap,
    animation: bounce_ani,
    icon: iconimg
  });

  var infowindow_hy = new google.maps.InfoWindow({
    content:'<p>Hollywood Sign</p>'
  });

  google.maps.event.addDomListener(marker_hy, 'mouseover', function(){
    infowindow_hy.open(myMap,marker_hy);
  });

  //Griffith Observatory
  var marker_gr = new google.maps.Marker({
    position:new google.maps.LatLng(34.11850071638153, -118.30037204232794),
    map: myMap,
    animation: bounce_ani,
    icon: iconimg
  });

  var infowindow_gr = new google.maps.InfoWindow({
    content:'<p>Griffith Observatory</p>'
  });

  google.maps.event.addDomListener(marker_gr, 'mouseover', function(){
    infowindow_gr.open(myMap,marker_gr);
  });

  //The Getty
  var marker_gt = new google.maps.Marker({
    position:new google.maps.LatLng(34.079383314067684, -118.47437291228445),
    map: myMap,
    animation: bounce_ani,
    icon: iconimg
  });

  var infowindow_gt = new google.maps.InfoWindow({
    content:'<p>The Getty</p>'
  });

  google.maps.event.addDomListener(marker_gt, 'mouseover', function(){
    infowindow_gt.open(myMap,marker_gt);
  });

  //Universal Studio
  var marker_us = new google.maps.Marker({
    position:new google.maps.LatLng(34.13817452075949, -118.35339975767207),
    map: myMap,
    animation: bounce_ani,
    icon: iconimg
  });

  var infowindow_us = new google.maps.InfoWindow({
    content:'<p>Universal Studio</p>'
  });

  google.maps.event.addDomListener(marker_us, 'mouseover', function(){
    infowindow_us.open(myMap,marker_us);
  });
}

google.maps.event.addDomListener(window,'load',init);