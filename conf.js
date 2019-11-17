exports.config = {
    defaultTimeoutInterval: 60000,
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine2',
    specs: ['src/specs/automation-practice.spec.js']
};