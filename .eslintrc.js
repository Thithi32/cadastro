module.exports = {
  "extends": "airbnb",
  globals: {
    "document": 0,
    "window": 0,
    "navigator": 0,
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
};