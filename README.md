Steps to reproduce bug with plugin-babel@0.0.10:

`jspm bundle -id index.js`

Bundle works.

`jspm install plugin-babel`

`jspm bundle -id index.js`

Bundle fails with error:
```
TypeError: Cannot read property 'match' of null
    at /Users/me/jspm-plugin-babel-10/node_modules/systemjs-builder/lib/sourcemaps.js:62:25
    at Array.forEach (native)
    at SourceMapConsumer_eachMapping [as eachMapping] (/Users/me/jspm-plugin-babel-10/node_modules/source-map/lib/source-map-consumer.js:155:14)
    at /Users/me/jspm-plugin-babel-10/node_modules/systemjs-builder/lib/sourcemaps.js:61:24
    at Array.forEach (native)
    at exports.concatenateSourceMaps (/Users/me/jspm-plugin-babel-10/node_modules/systemjs-builder/lib/sourcemaps.js:42:19)
    at createOutput (/Users/me/jspm-plugin-babel-10/node_modules/systemjs-builder/lib/output.js:63:21)
    at exports.writeOutputs (/Users/me/jspm-plugin-babel-10/node_modules/systemjs-builder/lib/output.js:150:16)
    at /Users/me/jspm-plugin-babel-10/node_modules/systemjs-builder/lib/builder.js:607:14
    at tryCatcher (/Users/me/jspm-plugin-babel-10/node_modules/bluebird/js/release/util.js:16:23)
    at Promise._settlePromiseFromHandler (/Users/me/jspm-plugin-babel-10/node_modules/bluebird/js/release/promise.js:502:31)
    at Promise._settlePromise (/Users/me/jspm-plugin-babel-10/node_modules/bluebird/js/release/promise.js:559:18)
    at Promise._settlePromise0 (/Users/me/jspm-plugin-babel-10/node_modules/bluebird/js/release/promise.js:604:10)
    at Promise._settlePromises (/Users/me/jspm-plugin-babel-10/node_modules/bluebird/js/release/promise.js:683:18)
    at Async._drainQueue (/Users/me/jspm-plugin-babel-10/node_modules/bluebird/js/release/async.js:138:16)
    at Async._drainQueues (/Users/me/jspm-plugin-babel-10/node_modules/bluebird/js/release/async.js:148:10)
```
