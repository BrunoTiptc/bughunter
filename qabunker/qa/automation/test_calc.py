# 🧪 Teste básico de lógica com PyTest

def soma(a, b):
    """Função simples para somar dois números"""
    return a + b


def subtrai(a, b):
    """Função simples para subtrair dois números"""
    return a - b


def test_soma():
    """Valida se a soma retorna o resultado esperado"""
    resultado = soma(3, 4)
    assert resultado == 7, f"Esperado 7, mas retornou {resultado}"


def test_subtrai():
    """Valida se a subtração retorna o resultado esperado"""
    resultado = subtrai(10, 5)
    assert resultado == 5, f"Esperado 5, mas retornou {resultado}"
