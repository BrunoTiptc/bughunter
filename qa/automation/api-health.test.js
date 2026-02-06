async function testApiHealth() {
  const url = "http://localhost:5000/health"

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Status inesperado: ${response.status}`)
    }

    const data = await response.json()

    if (data.status !== "ok") {
      throw new Error("Resposta inválida da API")
    }

    console.log("✅ TESTE PASSOU: API Flask saudável")

  } catch (error) {
    console.error("❌ TESTE FALHOU:", error.message)
    process.exit(1) // importante pro CI
  }
}

testApiHealth()
