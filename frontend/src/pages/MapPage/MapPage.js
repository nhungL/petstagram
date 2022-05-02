import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useSelector } from "react-redux";
import AppBarContent from "../../components/ResponsiveAppBar/AppBarContent";
import useStyles from "./Style";
import * as MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

//mapboxgl.accessToken = process.env.MAPBOX_API_KEY;
mapboxgl.accessToken =
  "pk.eyJ1IjoidHJ1Y3RwaGFuIiwiYSI6ImNsMm5vaXQ4NTIyeXozY2x3NXUwZ3N0NTYifQ.ExCdvnR9uVGRoFEqc7MLeA";

const MapPage = () => {
  const classes = useStyles();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userId = userInfo._id;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-96);
  const [lat, setLat] = useState(37.8);
  const [zoom, setZoom] = useState(3);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat], // starting position
      zoom: zoom, // starting zoom
    });

    // Add geolocate control to the map.
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,
      })
    );

    const geocoder = new MapboxGeocoder({
      // Initialize the geocoder
      accessToken: mapboxgl.accessToken, // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: false, // Do not use the default marker style
      placeholder: "Search...",
    });

    // After the map style has loaded on the page,
    // add a source layer and default styling for a single point
    map.on("load", () => {
      map.addSource("single-point", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });

      map.addLayer({
        id: "point",
        source: "single-point",
        type: "circle",
        paint: {
          "circle-radius": 10,
          "circle-color": "#448ee4",
        },
      });
      
      // Listen for the `result` event from the Geocoder
      // `result` event is triggered when a user makes a selection
      //  Add a marker at the result's coordinates
      geocoder.on("result", (event) => {
        map.getSource("single-point").setData(event.result.geometry);
        //get address
        console.log(event.result.place_name);
      });
    });

    // Add the geocoder to the map
    map.addControl(geocoder);

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className={classes.background}>
      <AppBarContent userId={userId} />
      <div className={classes.mapContainer} ref={mapContainer} />
    </div>
  );
};

export default MapPage;
