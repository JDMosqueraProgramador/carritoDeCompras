from flask import jsonify, Flask
from mysql import connector
import json

app = Flask(__name__)

con = connector.connect(
    host="localhost",
    user="root",
    passwd="",
    database="carrito"
)

cursor = con.cursor(dictionary=True)

cursor.execute("SELECT * FROM usuarios")

usuarios = cursor.fetchall()

# usuarios = json.dumps(usuarios)

# print(usuarios)

@app.route('/')
def AppJson():
    d = usuarios
    return jsonify(d)


