# Flask App Documentation

## Overview
This is a Python Flask application that serves as a backend for a web application. It provides several endpoints for retrieving data from a SQLite database and serves a React frontend application. The app uses the Flask framework for creating web routes and handling HTTP requests, Flask-CORS for enabling Cross-Origin Resource Sharing, and SQLite for data storage.

## Prerequisites
Before running this Flask application, ensure that you have the following prerequisites installed:
- Python 3.x
- Flask
- Flask-CORS
- SQLite (or SQLite3 for Python)

## Installation
Clone the repository where this `app.py` file is located to your local machine.

Install the required Python libraries by running the following command in your project directory:
```
pip install flask flask-cors
```

## Configuration
The application is set up with some configuration and routes for serving the frontend and providing access to data stored in an SQLite database. Make sure to have an SQLite database named `outlets.db` in the same directory as your `app.py` file. The database should have a table named `outlets` with columns `name`, `address`, `lon`, and `lat`.

## Usage
Run the Flask application by executing the following command:
```
python app.py
```
The application will start on the default Flask development server and be available at http://localhost:5000.

## Routes
1. **Serving React Frontend**
   - Route: `/`
   - Method: GET
   - Description: This route serves the React frontend application. It sends the index.html file along with other static assets from the front-end/build directory. The route is configured to support Cross-Origin Resource Sharing (CORS).

2. **Retrieve Outlet Names**
   - Route: `/name`
   - Method: GET
   - Description: This route retrieves the names of outlets from the outlets database table and returns the data as a JSON response. The names may contain Unicode hyphens, which are replaced with regular hyphens before returning the data. The route is configured to support CORS.

3. **Retrieve Outlet Addresses**
   - Route: `/address`
   - Method: GET
   - Description: This route retrieves the addresses of outlets from the outlets database table and returns the data as a JSON response. The route is configured to support CORS.

4. **Retrieve Outlet Longitude and Latitude**
   - Route: `/lonlat`
   - Method: GET
   - Description: This route retrieves the longitude and latitude coordinates of outlets from the outlets database table and returns the data as a JSON response. The route is configured to support CORS.

## Example Requests and Responses
**Request**: GET /name

**Response**:
```json
[
  "ZUS Coffee – MITC Melaka",
  "ZUS Coffee – Merlimau",
  "ZUS Coffee – Kuala Sungai Baru"
]
```
**Request**: GET /address

**Response**:
```json
[
  "No.41, Ground Floor, Jalan Komersial, Taman Kota Fesyen MITC, 75450, Ayer Keroh, Melaka",
  "JC 23, Ground Floor, Jalan BMU 1, Bandar Baru Merlimau Utara, 77300, Merlimau, Melaka",
  "SI 15, Ground Floor, Jalan Sungai Baru Ilir Jaya Utama, Taman Sungai Baru Ilir Jaya, 78300 Masjid Tanah, Melaka."
]
```
**Request**: GET /lonlat

**Response**:
```json
[
  {
    "lon": 102.2915442,
    "lat": 2.255986
  },
  {
    "lon": 102.425724,
    "lat": 2.147558
  },
  {
    "lon": 102.1089793,
    "lat": 2.3522253
  }
]
```

## Conclusion
This Flask application serves as a backend for a web application, providing access to outlet data from an SQLite database and serving a React frontend. The application is configured with routes that enable data retrieval and support Cross-Origin Resource Sharing for web clients.