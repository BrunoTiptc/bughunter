from flask import Flask, jsonify, request

app = Flask(__name__)

# Rota inicial
@app.route("/")
def home():
    return jsonify({"message": "Backend Flask rodando com sucesso!"})

# Exemplo de rota GET
@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify({"message": "Olá Bruno, sua API está viva 🚀"})

# Exemplo de rota POST
@app.route("/api/echo", methods=["POST"])
def echo():
    data = request.json
    return jsonify({"you_sent": data})

if __name__ == "__main__":
    app.run(debug=True, port=5000)