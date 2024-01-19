  // создание карты
  var mymap = L.map('map').setView([52.4447, 31.0119], 8);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'MyMaps',
      maxZoom: 18
  }).addTo(mymap);
  mymap.attributionControl.setPrefix('');