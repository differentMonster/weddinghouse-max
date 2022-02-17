module.exports = {
    setupFiles: ['<rootDir>/jest.setup.js'],
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
        ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
    },
    // set jsdom
    testEnvironment: "jsdom",
    // ingore cypress tests
    testPathIgnorePatterns: ["<rootDir>/cypress/"],
    snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
    collectCoverage: true,
    collectCoverageFrom: [
        "<rootDir>/components/**/*.vue",
        "<rootDir>/pages/*.vue",
        '<rootDir>/layouts/**/*.vue',
        '<rootDir>/middleware/**/*.js',
        '<rootDir>/store/**/*.js',
        '<rootDir>/mixins/**/*.js',
        '<rootDir>/services/**/*.js',
    ],
    forceExit: !!process.env.CI // almost every CI platform sets this by default
};