import { getTestStatus } from './utils/testLogger.js';

async function runTests() {
    console.log("🚀 Iniciando testes QA...\n");

    try {
        const healthTest = (await import('./health/health.test.js')).default;
        const invalidRouteTest = (await import('./health/invalidRoute.test.js')).default;

        await healthTest();
        await invalidRouteTest();

        console.log("\n📊 Testes finalizados");

        if (getTestStatus()) {
            console.log("\n🚨 Testes falharam!");
            process.exit(1);
        } else {
            console.log("\n✅ Todos os testes passaram!");
            process.exit(0);
        }

    } catch (error) {
        console.log("\n❌ Erro ao executar testes");
        console.error(error);
        process.exit(1);
    }
}

runTests();