const fs = require('fs');

// An array created by parsing JSON data for GitHub issues
// submitted to the ExpressJS repo
let issues = require('./data/expressIssues');

class Issues {
  constructor (issues) {
    this.issues = issues;
  }

  // return an array containing each issues `id`
  get ids() {
    return issues.map(obj => obj.id);
  }

  // return the total number of issues
  get numberOfIssues() {
    return issues.length;
  }

  // return an array containing each issues `title`
  get titles() {
    return issues.map(obj => obj.title);
  }

  // return an array containing the `login` property of the
  // `user` property for each issue. The array should not contain
  // any duplicate elements
  get users() {
    let tmp = new Set(issues.map(obj => obj.user.login));
    return [...tmp];
  }

  // return an array containing the `avatar_url` property of the
  // `user` property for each issue. The array should not contain
  // any duplicate elements
  get avatars() {
    let tmp = new Set(issues.map(obj => obj.user.avatar_url));
    return [...tmp];
  }

  // return an array containing all the `id` property of the `assignedIssue`
  // property for each issue with an `assignee` property that is not `null`
  get withAssignee() {
    return issues.filter(obj => obj.assignee !== null)
    .map(obj => obj.id);
  }

  // return an array containing all the `id` property of the `assignedIssue`
  // property for each issue with a `pull_request` property that is not `null`
  get withPullRequest() {
    return issues.filter(obj => obj.pull_request !== undefined
      && obj.pull_request !== null)
    .map(obj => obj.id);
  }

  // return the total number of comments for all the issues, based on the
  // `comments` property
  get totalComments() {
    return issues.reduce((total, obj) => total + obj.comments, 0);
  }

  // Return the `login` property of the `user` property for the `user` that has
  // submitted the most issues
  get mostActiveUser() {
  }
}



module.exports = Issues;
