module.exports = {
    moduleFileExtensions: [
        "js",
        "jsx",
        "json",
        "vue",
    ],
    transform: {
        "^.+\\.vue$": "vue-jest",
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
        "^.+\\.jsx?$": "babel-jest",
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    snapshotSerializers: [
        "jest-serializer-vue",
    ],
    testMatch: [
        "<rootDir>/(tests/unit/**/*.test.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{js,vue}",
        "!src/*.{js,vue}",
        "!**/node_modules/**",
    ],
    coverageDirectory: "<rootDir>/tests/coverage",
};
