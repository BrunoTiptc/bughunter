from flask import Flask, request, jsonify

app = Flask(__name__)

# Usuário de teste mock
FAKE_USER = {
    "email": "bruno@test.com",
    "password": "123456",
    "nome": "Bruno"
}

@app.route('/')
def status():
    return jsonify({"msg": "Mock login API rodando!"})

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    if not data:
        return jsonify({"erro": "Json ausente!"}), 400
    email = data.get('email')
    password = data.get('password')
    if email == FAKE_USER['email'] and password == FAKE_USER['password']:
        return jsonify({
            "msg": f"Login realizado com sucesso. Bem-vindo, {FAKE_USER['nome']}!"
        }), 200
    else:
        return jsonify({"erro": "Usuário ou senha inválidos."}), 401

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
