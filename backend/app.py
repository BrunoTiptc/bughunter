from flask import Flask, jsonify, request
from datetime import datetime

app = Flask(__name__)

# Rota inicial
@app.route("/")
def home():
    return jsonify({"message": "Backend Flask rodando com sucesso!"})

# Health check (rota de vida)
@app.route("/health", methods=["GET"])
def health():
    return jsonify({
        "status": "ok",
        "service": "bughunter-backend",
        "timestamp": datetime.utcnow().isoformat()
    }), 200

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
    app.run(host="0.0.0.0", port=5000, debug=True)
