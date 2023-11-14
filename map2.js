let map;

async function initMap() {

  

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    center: { lat: 34.07483820292655, lng: -118.40209362753376 },
    zoom: 10,
    mapId: "4504f8b37365c3d0",
  });

  const cat_marker1 = "images/cat_marker1.png";
  const cat_marker2 = "images/cat_marker2.png";
  const bounce_ani = google.maps.Animation.BOUNCE;

  //SantaMonica Marker
  const marker_sm = new google.maps.Marker({
    map,
    position: { lat: 34.00993246109917, lng: -118.49913366580247 },
    icon: cat_marker1,
    animation: bounce_ani,
  });
  var infowindow_sm = new google.maps.InfoWindow({
    content:'<p>Santa Monica</p>'
  });
  google.maps.event.addDomListener(marker_sm, 'mouseover', function(){
    infowindow_sm.open(map,marker_sm);
  });

  //Hollywood Sign Marker
  const marker_hy = new google.maps.Marker({
    map,
    position: { lat: 34.13416341181732, lng: -118.32154780794004 },
    icon: cat_marker1,
    animation: bounce_ani,
  });
  var infowindow_hy = new google.maps.InfoWindow({
    content:'<p>Hollywood Sign</p>'
  });
  google.maps.event.addDomListener(marker_hy, 'mouseover', function(){
    infowindow_hy.open(map,marker_hy);
  });
  
  //Griffith Observatory Marker
  const marker_go = new google.maps.Marker({
    map,
    position: { lat: 34.11850071638153, lng: -118.30037204232794 },
    icon: cat_marker1,
    animation: bounce_ani,
  });
  var infowindow_go = new google.maps.InfoWindow({
    content:'<p>Griffith Observatory</p>'
  });
  google.maps.event.addDomListener(marker_go, 'mouseover', function(){
    infowindow_go.open(map,marker_go);
  });

  //The Getty Marker
  const marker_gt = new google.maps.Marker({
    map,
    position: { lat: 34.079383314067684, lng: -118.47437291228445 },
    icon: cat_marker1,
    animation: bounce_ani,
  });
  var infowindow_gt = new google.maps.InfoWindow({
    content:'<p>The Getty</p>'
  });
  google.maps.event.addDomListener(marker_gt, 'mouseover', function(){
    infowindow_gt.open(map,marker_gt);
  });

  //Universal Studio
  const marker_us = new google.maps.Marker({
    map,
    position: { lat: 34.13817452075949, lng: -118.35339975767207 },
    icon: cat_marker1,
    animation: bounce_ani,
  });
  var infowindow_us = new google.maps.InfoWindow({
    content:'<p>Universal Studio</p>'
  });
  google.maps.event.addDomListener(marker_us, 'mouseover', function(){
    infowindow_us.open(map,marker_us);
  });

  //Flight

  //ICN Marker
  const marker_finc = new google.maps.Marker({
    map,
    position: { lat: 37.44935972477719, lng: 126.45133949609294 },
    icon: cat_marker2,
  });
  var infowindow_finc = new google.maps.InfoWindow({
    content:'<p>Incheon International Airport</p>'
  });
  google.maps.event.addDomListener(marker_finc, 'mouseover', function(){
    infowindow_finc.open(map,marker_finc);
  });

  //HND Marker
  const marker_fhnd = new google.maps.Marker({
    map,
    position: { lat: 35.54941502284094, lng: 139.77984396441778 },
    icon: cat_marker2,
  });
  var infowindow_fhnd = new google.maps.InfoWindow({
    content:'<p>Haneda Airport</p>'
  });
  google.maps.event.addDomListener(marker_fhnd, 'mouseover', function(){
    infowindow_fhnd.open(map,marker_fhnd);
  });
  
  //LAX Marker
  const marker_flax = new google.maps.Marker({
    map,
    position: { lat: 33.9438346757524, lng: -118.40909287522364 },
    icon: cat_marker2,
  });
  var infowindow_flax = new google.maps.InfoWindow({
    content:'<p>Los Angeles International Airport</p>'
  });
  google.maps.event.addDomListener(marker_flax, 'mouseover', function(){
    infowindow_flax.open(map,marker_flax);
  });

  //ORD Marker
  const marker_ford = new google.maps.Marker({
    map,
    position: { lat: 41.98091157136125, lng: -87.90987477142993 },
    icon: cat_marker2,
  });
  var infowindow_ford = new google.maps.InfoWindow({
    content:"<p>O'Hare International Airport</p>"
  });
  google.maps.event.addDomListener(marker_ford, 'mouseover', function(){
    infowindow_ford.open(map,marker_ford);
  });



  const flightPlanCoordinates = [
    { lat: 41.98091157136125, lng: -87.90987477142993 },
    { lat: 33.9438346757524, lng: -118.40909287522364 },
    { lat: 35.54941502284094, lng: 139.77984396441778 },
    { lat: 37.44935972477719, lng: 126.45133949609294 },
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#F6638F",
    strokeOpacity: 1.0,
    strokeWeight: 5,
  });

  flightPath.setMap(map);
}

window.initMap-initMap();