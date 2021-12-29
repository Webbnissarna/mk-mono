const base = require("config/eslint-preset");

module.exports = {
  ...base,
  overrides: [
    ...base.overrides,
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
    },
  ],
};
