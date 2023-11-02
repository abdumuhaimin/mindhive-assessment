# React App Documentation

## Overview
This is a React web application that displays locations as markers on an interactive map. It retrieves location data, including longitude, latitude, names, and addresses, from a Flask API using asynchronous fetch requests and displays the data on the map using the react-leaflet library. The application uses Leaflet for map rendering and custom markers with popups. The documentation provides an overview of the key components, libraries, and the application's functionality.

## Prerequisites
Before using this React application, ensure that you have the following prerequisites:
- Node.js and npm installed.
- A Flask API server running and accessible to fetch data from.
- A basic understanding of React and JavaScript.

## Installation
Clone the repository where this `App.js` file is located to your local machine.

Install the required dependencies by running the following command in your project directory:
```
npm install
```
Start the React development server with the following command:
```
npm start
```
The application should open in your default web browser at http://localhost:3000.

## Component Description
1. **Fetching Data**
   - This React application fetches location data, including longitude, latitude, names, and addresses, from the Flask API at three different endpoints: `/lonlat`, `/name`, and `/address`. It uses the `useEffect` hook to make asynchronous requests and update the component's state (`lonlats`, `names`, and `address`) with the retrieved data. The application ensures proper error handling for failed requests.

2. **Map Display**
   - The main component of the application displays a map with markers representing locations. It uses the `MapContainer` component from react-leaflet to render the map, setting the center and initial zoom level.
   - **Map Configuration**: The `MapContainer` component is configured with an OpenStreetMap tile layer and attribution links. It uses the MapTiler and OpenStreetMap tile providers to display map tiles.
   - **Markers**: The application maps each location's longitude and latitude to a `Marker` component on the map. A custom icon (`zusIcon`) is defined to display a logo as the marker. The marker also includes a `Popup` component that displays the name and address of the location.
   - **Circles**: Around each marker, a blue circle with a 5KM radius is displayed using the `Circle` component. This circle visually represents the coverage area of the location.

3. **Data Mapping**
   - The retrieved data, including `lonlats`, `names`, and `address`, is mapped to markers and popups. Each location is displayed as a marker with its corresponding name and address in the popup. The `zusIcon` is used as the marker's icon.

## Example Requests and Responses
After fetching data from the Flask API, the application displays markers on the map with popups. For each marker, you'll see the name and address of the location, and a 5KM radius circle around it.

## Conclusion
This React web application provides an interactive map display of locations with their names, addresses, and coverage areas. It communicates with a Flask API to retrieve data and renders it using the react-leaflet library. The application demonstrates the integration of data fetching, mapping, and custom marker rendering on the map.