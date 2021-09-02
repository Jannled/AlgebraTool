from flask import Flask
from flask import jsonify, render_template, send_from_directory, request

import sympy as sp # Better numpy/scypy lol (algebraic calculations instead of numeric ones)
from sympy import *

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def indexHtml():
	return render_template('index.html')

@app.route('/ewev', methods=['POST'])
def ewev():
	return sp.latex(sp.Matrix(request.json).eigenvects())

# Calculate not used, done client side using Math.js
@app.route('/calculate', methods=['POST'])
def calcuExp():
	return sp.latex(N(sp.sympify(request.json)))

if __name__ == '__main__':
	app.run(host='0.0.0.0', debug=True)