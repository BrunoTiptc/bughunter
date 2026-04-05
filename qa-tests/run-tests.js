import { getTestStatus, getResults } from './utils/testLogger.js';
import fs from 'fs';

async function runTests() {
    console.log("🚀 Iniciando testes QA...\n");

    try {
        const healthTest = (await import('./health/health.test.js')).default;
        const invalidRouteTest = (await import('./health/invalidRoute.test.js')).default;

        await healthTest();
        await invalidRouteTest();

        console.log("\n📊 Testes finalizados");

        // Salva o relatório ANTES de sair
        const results = getResults();
        fs.writeFileSync(
            "qa-report.json",
            JSON.stringify(results, null, 2)
        );

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

        // Tenta salvar o relatório mesmo em caso de erro
        const results = getResults();
        fs.writeFileSync(
            "qa-report.json",
            JSON.stringify(results, null, 2)
        );
        fs.writeFileSync(
            "qa-report.html",
            generateHTMLReport(results)
        );
        process.exit(1);
    }
    function generateHTMLReport(results) {
    return `
    <html>
    <head>
        <title>QA Report</title>
        <style>
            body { font-family: Arial; padding: 20px; }
            .PASS { color: green; }
            .FAIL { color: red; }
            .WARN { color: orange; }
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid #ccc; padding: 10px; }
        </style>
    </head>
    <body>
        <h1>📊 QA Test Report</h1>
        <table>
            <tr>
                <th>Teste</th>
                <th>Status</th>
                <th>Mensagem</th>
                <th>Data</th>
            </tr>
            ${results.map(r => `
                <tr>
                    <td>${r.test}</td>
                    <td class="${r.status}">${r.status}</td>
                    <td>${r.message}</td>
                    <td>${r.timestamp}</td>
                </tr>
            `).join("")}
        </table>
    </body>
    </html>
    `;
}
}

runTests();