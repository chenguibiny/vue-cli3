module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential","eslint:recommended"],
  //  "@vue/prettier" 如果想要eslint 就把这个加到extends
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
