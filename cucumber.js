// cucumber.js

module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require src/support/**/*.ts',
    '--require src/steps/**/*.ts',
    '--format progress',
    '--format json:reports/cucumber-report.json',
    '--format junit:reports/cucumber-report.xml'
  ].join(' ')
};

