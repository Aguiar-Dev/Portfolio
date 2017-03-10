/* jshint esversion: 6 */
// Setting up all requirements for the tool
const moment = require('moment');
const colors = require('colors');
const Console = console;
let logstatus;

// Setting local colors theme for the logging
colors.setTheme({
  info: 'green',
  good: 'blue',
  header: 'yellow',
  error: 'red',
  data: 'cyan',
});

// The Logging functionality of the utility tool (meant to substitute console.log)
exports.logger = (title, data, status, consoleMethod) => {
  // Sets up all information to be displayed with colors on console.
  const obj = JSON.stringify(data);
  const now = moment().format();
  const seperator = '\n=================================================\n'.info;
  const output = seperator + ('[' + now + ']: ').good + title.header + seperator;

  if (consoleMethod === 'log') {
    Console.log(output, colors.data(obj), status);
  } else if (consoleMethod === 'error') {
    Console.error(output, colors.error(obj), status);
  } else if (consoleMethod === 'warn') {
    Console.warn(output, colors.header(obj), status);
  } else {
    Console.error(colors.error('You have passed a invalid method'));
  }
};

// The Debugging functionality
// checks either empty, undefined, or correct formatting
exports.debug = (data) => {
  // setting up local variables
  let info;
  let passing = true;
  // Check if data passed is undefined or not
  if (data !== undefined) {
    // if checks data passed in empty / else if checks data is in the correct format
    if (Object.keys(data).length === 0 || data.length === 0) {
      passing = true;
    } else if (Object.keys(data).length > 0 || data.length > 0) {
      passing = false;
    } // end if/else
  } else {
    // Setting up the undefined data response
    logstatus = '\nData was undefined.\n';
    this.logger('Data Check ?', data, logstatus.error, 'error');
    return null;
  } // end if/else

  // Sets up the response for either empty or correct data
  if (passing === true) {
    logstatus = '\nData was empty.\n';
    info = this.logger('Data Check -', data, logstatus.error, 'error');
  } else {
    logstatus = '\nData was passed correctly.\n';
    info = this.logger('Data Check +', data, logstatus.good, 'log');
  } // end if/else
  return info;
};

exports.versionbump = (currentVersion, tag) => {
  let newVersion;
  // Split the string at the dot
  const tagValues = currentVersion.split('.');
  // Loop through the split array
  for (let i = 0; i <= tagValues.length; i++) {
    parseInt(tagValues[i], 10);
  }
  // Varify that the tag is either major minor or patch.
  if (tag === 'major' || tag === 'minor' || tag === 'patch') {
    if (tag === 'major') {
      // Increase major and zero out minor and patch.
      // Then turn everything to a sting and join with a dot.
      tagValues[0]++;
      tagValues[0].toString();
      tagValues[1] = '0';
      tagValues[2] = '0';
      newVersion = tagValues.join('.');
    } else if (tag === 'minor') {
      // increase minor and zero patch.
      // Then turn everything to a sting and join with a dot.
      tagValues[0].toString();
      tagValues[1]++;
      tagValues[1].toString();
      tagValues[2] = '0';
      newVersion = tagValues.join('.');
    } else if (tag === 'patch') {
      // increase patch.
      // Then turn everything to a sting and join with a dot.
      tagValues[0].toString();
      tagValues[1].toString();
      tagValues[2]++;
      tagValues[2].toString();
      newVersion = tagValues.join('.');
    }
  } else {
    // return an error string to throw error in console with gulp
    newVersion = 'error';
  }
  return newVersion;
};
