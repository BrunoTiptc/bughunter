import { logPass, logFail } from '../utils/testLogger.js';

export default async function testInvalidRoute() {
    const testName = "Invalid Route (404)";
    const url = "http://localhost:5000/rota-invalida";

    try {
        const response = await fetch(url);

        if (response.status === 404) {
            logPass(testName);
        } else {
            logFail(testName, `Esperado 404, recebido ${response.status}`);
        }

    } catch (error) {
        logFail(testName, "Erro na requisição");
        console.error(error.message);
    }
}