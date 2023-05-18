let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: -14.6636828, lng: 17.6627567 },
    zoom: 16,
  });
}

initMap();