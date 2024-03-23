module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue",
        "prettier"
    ],
    "rules": {
        "no-multiple-empty-lines": [2, { "max": 2 }],
        "prettier/prettier": [
            "error",
            {
                "endOfLine": "lf",
            }
        ],
        "vue/multi-word-component-names": "off",
        "vue/no-v-model-argument": "off",
        "vue/no-multiple-template-root": "off",
        "vue/no-v-for-template-key": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
    }
}
