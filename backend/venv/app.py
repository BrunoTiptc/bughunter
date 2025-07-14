from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# Dados simulados de bugs (vai evoluir depois para banco)
bugs = []

@app.route('/')
def home():
    return "API BugHunter Backend - Rodando!"

@app.route('/bugs', methods=['GET'])
def get_bugs():
    return jsonify(bugs)

@app.route('/bugs', methods=['POST'])
def add_bug():
    bug = request.get_json()
    bugs.append(bug)
    return jsonify({"message": "Bug adicionado com sucesso!", "bug": bug}), 201

if __name__ == '__main__':
    app.run(debug=True)
