exports.config = {
    defaultTimeoutInterval: 100000,
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine2',
    specs: ['src/specs/automation-practice.spec.js'],
    
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 360000
      },
   };