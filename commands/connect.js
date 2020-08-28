const chalk = require("chalk");
const files = require("../lib/files");
const git = require("../lib/git");
const getConfig = require("../lib/config").getConfig;

const connect = (username, project, connection, organization, opts) => {
  console.log(chalk.cyanBright("Connecting remote origin..."));
  const githubUsername = username || getConfig("github");
  const projectName = project || files.getCurrentDirectoryBase();
  const connectionType = connection || getConfig("connection");

  if (organization) {
    git.createOrOverrideRemoteOrigin(organization, projectName, connectionType);
  } else {
    git.createOrOverrideRemoteOrigin(
      githubUsername,
      projectName,
      connectionType
    );
  }

  if (opts && !opts.skipInitMsg) {
    console.log(chalk.cyanBright("To make first push:"));
    console.log("git add .");
    console.log('git commit -m "init"');
    console.log("git push origin master");
  } else {
    console.log('run')
    git.addCommitPushMaster("Initial commit");
  }
};

module.exports = {
  connect,
};
