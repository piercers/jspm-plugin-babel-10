SystemJS.config({
  baseURL: "/",
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "jspm-plugin-babel-10/": "src/"
  },
  bundles: {
    "build.js": [
      "index.js",
      "npm:systemjs-plugin-babel@0.0.9/babel-helpers/classCallCheck.js",
      "npm:systemjs-plugin-babel@0.0.9.json"
    ]
  }
});
