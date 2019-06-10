const json = require('../fixtures/semantic-version-script.json');

const getLatestOldestTags = json => {
  const tags = json.tags.map(tag => tag.split('.').map(v => parseInt(v)));

  const sortedTags = tags.sort(sortTags);
  const lastestTag = sortedTags[sortedTags.length - 1].join('.');
  const oldestTag = sortedTags[0].join('.');
  const res = {
    lastest_version: lastestTag,
    oldest_version: oldestTag
  };

  return JSON.stringify(res);
};

const sortTags = (tagA, tagB) => {
  for (const v in tagA) {
    if (tagA[v] < tagB[v]) {
      return -1;
    } else if (tagA[v] > tagB[v]) {
      return 1;
    }
  }
  return 0;
};

console.log(getLatestOldestTags(json));
