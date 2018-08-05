module.exports = {
  "extends": "airbnb",
  globals: {
    "document": 0,
    "window": 0,
    "navigator": 0,
    "it": 0,
    "FormData": 0,
    "alert": 0,
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-a11y/label-has-for": 0,
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
};