module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true,
    coverageDirectory: "tests_report/coverage",
    globals: {
        "ts-jest": {
            tsconfig: "./tsconfig.json"
        }
    },
};