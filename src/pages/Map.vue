<template>
  <div>
    <div id="mapid"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'map',
    data () {
        return {
          msg: 'Welcome to Your Maps',
        }
    },
    created: function () {
      // `this` points to the vm instance
      axios.get("http://localhost:3000/fields")
      .then((response)  =>  {
        var map = L.map('mapid').setView([51.505, -0.09], 13);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        response.data.features.forEach((feature) => {
          L.geoJSON(feature).addTo(map);
        });
      }, (error)  =>  {
        throw new Error(error);
      })
    },
}
</script>

<style>
  #mapid { 
    height: 300px; 
  }
</style>