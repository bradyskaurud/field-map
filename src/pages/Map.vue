<template>
  <div>
    <div id="mapid"></div>
    <!-- <div v-for="field in fields" :key="field" style="height:30px; color:black">
      <p>{{field}}</p>
       <a v-bind:href="field" style="height:10px;"/>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'map',
    data () {
        return {
          msg: 'Welcome to Your Maps',
          fields: [],
        }
    },
    created: function () {
      // `this` points to the vm instance
      axios.get(`http://24e46f03.ngrok.io/fields`)
      .then((response)  =>  {
        var map = L.map('mapid').setView([47.379851, -96.262011], 10);

        const osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        });
        
        osm.addTo(map);

        response.data.features.forEach((feature) => { 
          const field = L.geoJSON(feature).addTo(map);
          const mapUrl = `https://www.google.com/maps/dir/?api=1&origin=&destination=${feature.properties.Latitude},${feature.properties.Longitude}&travelmode=driving`;
          this.fields.push(mapUrl);
          field.bindPopup(`${feature.properties.COMNAME} <a href="${mapUrl}" target="_blank"/> GO HERE </button>`);
        });
      }, (error)  =>  {
        throw new Error(error);
      })
    },
}
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;  
  }

  #mapid { 
    height: 100vw;
    width: 100vw; 
  }
</style>