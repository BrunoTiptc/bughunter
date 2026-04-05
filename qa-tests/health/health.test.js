import { logPass, logFail, logWarn } from '../utils/testLogger.js';

export default async function testHealth() {
    const testName = "Health Check";
    const url = "http://localhost:5000/health";

    const startTime = Date.now();

    try {
        const response = await fetch(url);
        const endTime = Date.now();
        const duration = endTime - startTime;

        if (response.status !== 200) {
            logFail(testName, `Status inválido: ${response.status}`);
            return;
        }

        const data = await response.json();

        if (data.status === "ok") {
            logPass(testName);
        } else {
            logFail(testName, `Status inesperado: ${data.status}`);
        }

        // ⏱️ valida tempo (ajusta limite depois se quiser)
        if (duration > 500) {
            logWarn(testName, `Resposta lenta: ${duration}ms`);
        } else {
            console.log(`⚡ Tempo de resposta: ${duration}ms`);
        }

        // valida timestamp
        if (!data.timestamp) {
            logWarn(testName, "Timestamp não encontrado");
        }

    } catch (error) {
        logFail(testName, "Erro na requisição");
        console.error(error.message);
    }
}