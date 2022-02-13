module.exports = {
    // tell Jest to handle `*.vue` files
    moduleFileExtensions: ["js", "json", "vue"],
    watchman: false,
    moduleNameMapper: {
        "^~/(.*)$": "<rootDir>/$1",
        "^~~/(.*)$": "<rootDir>/$1",
        "^@/(.*)$": "<rootDir>/$1"
    },
    transform: {
        // process js with `babel-jest`
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
        // process `*.vue` files with `vue-jest`
        ".*\\.(vue)$": "@vue/vue3-jest"
    },
    // set jsdom
    testEnvironment: "jsdom",
    // ingore cypress tests
    testPathIgnorePatterns: ["<rootDir>/cypress/"],
    snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
    collectCoverage: true,
    collectCoverageFrom: [
        "<rootDir>/components/**/*.vue",
        "<rootDir>/pages/*.vue"
    ]
};