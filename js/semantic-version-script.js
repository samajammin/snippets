const json = require('../fixtures/semantic-version-script.json');

let result = {
  latest_version: null,
  oldest_version: null
};

let oldestMajor, oldestMinor, oldestPatch;
let [latestMajor, latestMinor, latestPatch] = [null, null, null];

function getFirstAndLatestVersion(input) {
  // set first tag as oldest for comparisons
  const firstTag = input.tags[0];
  result.latest_version = firstTag;
  result.oldest_version = firstTag;
  [oldestMajor, oldestMinor, oldestPatch] = firstTag
    .split('.')
    .map(t => parseInt(t));

  // loop through each tag
  input.tags.forEach(tag => {
    const [major, minor, patch] = tag.split('.').map(t => parseInt(t));
    console.log([major, minor, patch]);

    // determine if tag is latest_version
    if (major > latestMajor) {
      assignTag(tag, true);
    } else if (major === latestMajor && minor > latestMinor) {
      assignTag(tag, true);
    } else if (
      major >= latestMajor &&
      minor >= latestMinor &&
      patch > latestPatch
    ) {
      assignTag(tag, true);
    } else if (major < oldestMajor) {
      // else determine if tag is oldest_version
      assignTag(tag, false);
    } else if (major <= oldestMajor && minor < oldestMinor) {
      assignTag(tag, false);
    } else if (
      major <= oldestMajor &&
      minor <= oldestMinor &&
      patch < oldestPatch
    ) {
      assignTag(tag, false);
    }
  });
  // return JSON.stringify(result)
  console.log(JSON.stringify(result));
}

function assignTag(tag, isLatest) {
  const [major, minor, patch] = tag.split('.').map(t => parseInt(t));
  if (isLatest) {
    result.latest_version = tag;
    [latestMajor, latestMinor, latestPatch] = [major, minor, patch];
  } else {
    result.oldest_version = tag;
    [oldestMajor, oldestMinor, oldestPatch] = [major, minor, patch];
  }
}

getFirstAndLatestVersion(json);
