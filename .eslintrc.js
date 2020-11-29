module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    plugins: ["@typescript-eslint", "prettier", "react"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports,
        project: "./tsconfig.json"
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "prettier/prettier": ["error", { printWidth: 120 }],
        "react/prop-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/quotes": [
            "error",
            "backtick",
            {
                avoidEscape: true
            }
        ],
        "max-len": ["error", { code: 120, ignoreUrls: true }]
    }
};
