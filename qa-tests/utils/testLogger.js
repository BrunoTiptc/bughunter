let hasFailure = false;

export function logPass(testName) {
    console.log(`✅ [PASS] ${testName}`);
}

export function logFail(testName, message) {
    console.log(`❌ [FAIL] ${testName} -> ${message}`);
    hasFailure = true;
}

export function logWarn(testName, message) {
    console.log(`⚠️ [WARN] ${testName} -> ${message}`);
}

export function getTestStatus() {
    return hasFailure;
}