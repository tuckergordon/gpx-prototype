<script lang="ts">
  import * as L from "leaflet";
  import "leaflet/dist/leaflet.css";
  import "leaflet-gpx/gpx";
  import { onMount } from "svelte";

  let element: HTMLDivElement;

  onMount(() => {
    const map = L.map(element);
    L.tileLayer(
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
      {
        attribution:
          'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>',
      }
    ).addTo(map);

    const gpx = "assets/data/test.gpx"; // URL to your GPX file or the GPX itself
    new (L as any).GPX(gpx, {
      async: true,
      marker_options: {
        startIconUrl: "",
        endIconUrl: "",
        shadowUrl: "",
      },
    })
      .on("loaded", function (e) {
        map.fitBounds(e.target.getBounds());
      })
      .addTo(map);
  });
</script>

<div bind:this={element} class="leaflet" />

<style>
  .leaflet {
    display: block;
    width: 500px;
    height: 500px;
  }
</style>
