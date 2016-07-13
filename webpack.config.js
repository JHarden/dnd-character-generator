module.exports = {
    entry: "./entry.js",
    output: {
        path: "bundle",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loaders: ["style","css","sass"]}
        ]
    }
};