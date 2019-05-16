/* eslint-env node */

const path = require("path");
const fs = require("fs");
const chalk = require("chalk");

module.exports = {
  normalizeEntityName() {},

  afterInstall() {
    let stylePath = path.join("app", "styles");
    let file = path.join(stylePath, "app.scss");
    let importStatement = "@import 'ember-uikit-adsy-theme';";

    if (!fs.existsSync(stylePath)) {
      fs.mkdirSync(stylePath);
    }

    if (fs.existsSync(file)) {
      this.insertIntoFile(file, `\n${importStatement}`, {});
    } else {
      fs.writeFileSync(file, importStatement);
    }

    this._writeStatusToUI(chalk.green, "add import statement", file);

    return this.addAddonsToProject({
      packages: [
        { name: "ember-cli-sass", target: "latest" },
        { name: "ember-uikit", target: "latest" }
      ]
    });
  }
};
