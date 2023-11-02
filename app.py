from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import sqlite3

app = Flask(__name__, static_folder='front-end/build', static_url_path='/')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def replace_unicode_hyphen_with_regular_hyphen(data):
    modified_data = []
    for item in data:
        modified_item = list(item)
        modified_item[0] = modified_item[0].replace('\u2013', '-')
        modified_data.append(tuple(modified_item))
    return modified_data

@app.route('/')
@cross_origin()
def serve_react_app():
    return app.send_static_file(app.static_folder, 'index.html')

@app.route('/name', methods=['GET'])
@cross_origin()
def get_outlets_name():
    conn = sqlite3.connect("outlets.db")
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM outlets")
    data = cursor.fetchall()
    conn.close()
    data = replace_unicode_hyphen_with_regular_hyphen(data)
    return jsonify(data)

@app.route('/address', methods=['GET'])
@cross_origin()
def get_outlets_address():
    conn = sqlite3.connect("outlets.db")
    cursor = conn.cursor()
    cursor.execute("SELECT address FROM outlets")
    data = cursor.fetchall()
    conn.close()
    return jsonify(data)

@app.route('/lonlat', methods=['GET'])
@cross_origin()
def get_lon_lan_outlets():
    conn = sqlite3.connect("outlets.db")
    cursor = conn.cursor()
    cursor.execute("SELECT lon, lat FROM outlets")
    data = cursor.fetchall()
    conn.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run()