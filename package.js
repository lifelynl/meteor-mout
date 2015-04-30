Package.describe({
    name: "lifely:mout",
    summary: "A collection of modular JavaScript utilities.",
    version: "0.11.0",
    git: "https://github.com/lifely/meteor-mout.git"
});

Package.onUse(function(api) {
    api.addFiles(['mout.js']);
    api.export('mout');
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('lifely:mout');
    api.addFiles('tests/existance.js');
});
