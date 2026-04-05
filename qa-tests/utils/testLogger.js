let hasFailure = false;
const results = [];

export function logPass(testName) {
    console.log(`✅ [PASS] ${testName}`);
    results.push({
        test: testName,
        status: "PASS",
        message: "",
        timestamp: new Date().toISOString()
    });
}

export function logFail(testName, message) {
    console.log(`❌ [FAIL] ${testName} -> ${message}`);
    hasFailure = true;

    results.push({
        test: testName,
        status: "FAIL",
        message,
        timestamp: new Date().toISOString()
    });
}

export function logWarn(testName, message) {
    console.log(`⚠️ [WARN] ${testName} -> ${message}`);

    results.push({
        test: testName,
        status: "WARN",
        message,
        timestamp: new Date().toISOString()
    });
}

export function getTestStatus() {
    return hasFailure;
}

export function getResults() {
    return results;
}