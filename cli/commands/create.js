const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const frameworkDir = path.normalize(`${__dirname}/../../`);
const pkgTemplate = {
  name: "",
  version: "1.0.0",
  description: "",
  main: "constructor.js",
  author: "Steven Jackson",
  license: "GPL-3.0",
  dependencies: {},
  enigma: {
    enabled: "true",
    classname: "",
    displayname: "",
    archetype: ""
  }
};
const defaultValues = {
  service: {
    description: "Service plugin module for Style-O-Matic",
    pkgprefix: "enigma_service_",
    dispsuffix: " Service",
    dir: `${frameworkDir}/services/`
  },
  controller: {
    description: "Controller module for Style-O-Matic",
    pkgprefix: "enigma_controller_",
    dispsuffix: " Controller",
    dir: `${frameworkDir}/controllers/`
  }
};
const defaultPkgName = "general";
const defaultGrpName = "generic";
let defaultPkgDesc = "Generic node package";
let defaultPkgTmp = defaultValues.service;
let SERVICEGROUPS = ["*CREATE NEW*"];

const LICENSE_TEMPLATE =
  "Style-O-Matic\n\n%N% (%T%)\n\nCopyright (C) 2016  Steven Jackson\n\n" +
  "This program is free software: you can redistribute it and/or modify\n" +
  "it under the terms of the GNU General Public License as published by\n" +
  "the Free Software Foundation, either version 3 of the License, or\n" +
  "(at your option) any later version.\n\n" +
  "This program is distributed in the hope that it will be useful,\n" +
  "but WITHOUT ANY WARRANTY; without even the implied warranty of\n" +
  "MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n" +
  "GNU General Public License for more details.\n" +
  "You should have received a copy of the GNU General Public License\n" +
  "along with this program.  If not, see <http://www.gnu.org/licenses/>.";

const README_TEMPLATE =
  "#%N%\n" +
  "##%T%\n" +
  "####DESCRIPTION\n" +
  "This package creates a %t% for use by the Style-O-Matic framework.\n" +
  "%D%\n" +
  "___\n" +
  "####USAGE\n" +
  "TBD\n";

function getClassName(str) {
  let cn = str.replace(/ /g, "_");
  cn = cn.toLowerCase();
  return cn;
}

function getDisplayName(str) {
  let dn = str.replace(/_/g, " ");
  dn = dn.toLowerCase();
  dn = dn.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
  return dn;
}

function getDirectories(srcpath) {
  return fs
    .readdirSync(srcpath)
    .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory());
}

function getDirFiles(srcpath) {
  return fs
    .readdirSync(srcpath)
    .filter(file => fs.statSync(path.join(srcpath, file)).isFile());
}

function copySourceFile(srcFile, destFile) {
  console.log(chalk.yellow(`Reading file: ${srcFile}`));
  const srcBuffer = fs.readFileSync(srcFile);
  if (srcBuffer) {
    try {
      fs.writeFileSync(destFile, srcBuffer);
      console.log(`${chalk.bold.cyan("Added file")} %s`, srcFile);
    } catch (e) {
      console.log(chalk.red(e));
    }
  }
}

function copyContents(srcDir, destDir) {
  const dirAarray = getDirectories(srcDir);
  const srcArray = getDirFiles(srcDir);
  if (srcArray) {
    srcArray.forEach(srcFilename => {
      let lastSlash = srcFilename.lastIndexOf("/"),
        filename =
          lastSlash === -1 ? srcFilename : srcFilename.substring(lastSlash),
        destFile = destDir + filename,
        srcFile = srcDir + srcFilename;
      copySourceFile(srcFile, destFile);
    });
  }

  if (dirAarray) {
    dirAarray.forEach(subDir => {
      const srcSubDir = `${srcDir + subDir}/`;
      const destSubDir = `${destDir + subDir}/`;
      if (directoryExists(destSubDir, true)) {
        const srcArray = getDirFiles(srcSubDir);
        if (srcArray) {
          srcArray.forEach(srcFilename => {
            let lastSlash = srcFilename.lastIndexOf("/"),
              filename =
                lastSlash === -1
                  ? srcFilename
                  : srcFilename.substring(lastSlash),
              destFile = destSubDir + filename,
              srcFile = srcSubDir + srcFilename;
            copySourceFile(srcFile, destFile);
          });
        }
      }
      copyContents(srcSubDir, destSubDir);
    });
  }
}

function recommendFileName(name) {
  let srch = true;
  let iteration = 0;
  let result = name;
  let lookup = defaultPkgTmp.dir + result;

  while (srch === true) {
    const stat = fs.stat(lookup, (err, data) => {
      if (err) return false;
      return true;
    });
    if (stat) {
      result = `${name}_${iteration}`;
      lookup = defaultPkgTmp.dir + result;
      iteration++;
    } else {
      srch = false;
    }
  }
  return result;
}

function checkFileName(name) {
  let msg = false;
  try {
    fs.statSync(defaultPkgTmp.dir + name);
  } catch (e) {
    msg = true;
  }
  return msg;
}

function directoryExists(dir, canCreate) {
  let dirExists = false;
  try {
    fs.statSync(dir);
    dirExists = true;
  } catch (e) {
    if (canCreate) {
      try {
        fs.mkdirSync(dir);
        dirExists = true;
      } catch (e2) {
        dirExists = false;
        console.log(chalk.bold.red(e2));
      }
    } else {
      dirExists = false;
      console.log(chalk.bold.red(e));
    }
  }
  return dirExists;
}

const repeatQuestions = [
  {
    type: "confirm",
    name: "askAgain",
    message: "Want to create another package? (just hit enter for YES) ",
    default: true
  }
];
const questions = [
  {
    type: "list",
    name: "packageType",
    message: "What type of package are you creating?: ",
    choices: ["controller", "service"],
    default() {
      defaultPkgTmp = defaultValues.service;
      defaultPkgDesc = defaultPkgTmp.description;
      return "service";
    },
    validate(val) {
      defaultPkgTmp = defaultValues[val];
      defaultPkgDesc = defaultPkgTmp.description;
      return true;
    }
  },
  {
    type: "list",
    name: "serviceGroup",
    message: "Which service group will this be added to?: ",
    choices() {
      return SERVICEGROUPS;
    },
    when(a) {
      return a.packageType === "service";
    },
    default() {
      const val = !SERVICEGROUPS[0] ? defaultGrpName : SERVICEGROUPS[0];
      return val;
    }
  },
  {
    type: "input",
    name: "newServiceGroup",
    message: "What's the name of the new service group?: ",
    when(a) {
      return a.packageType === "service" && a.serviceGroup === "*CREATE NEW*";
    },
    default: defaultGrpName
  },
  {
    type: "input",
    name: "packageName",
    message: "What's the name of this new package?",
    default: defaultPkgName,
    validate(val) {
      const check = checkFileName(`${defaultGrpName}/${val}`);
      if (!check) {
        console.log(
          `\n${chalk.bold.red(`The package "${val}" Already Exists`)}\n`
        );
        return false;
      }
      return true;
    }
  },
  {
    type: "input",
    name: "packageDesc",
    message: "Write a description: ",
    default() {
      return defaultPkgDesc;
    }
  }
];

function processRequest(self, answers, cb) {
  let dir = frameworkDir,
    pd = answers.packageDesc,
    pn = answers.packageName,
    pt = answers.packageType,
    sg = answers.serviceGroup,
    nsg = answers.newServiceGroup,
    sgn = sg === "*CREATE NEW*" ? nsg : sg,
    strTemplate = defaultValues[pt],
    preDir = dir.endsWith("/") ? dir : `${dir}/`,
    pkgFileTemplate = pkgTemplate,
    pkgName,
    className,
    displayName,
    destDir;

  className = getClassName(pn);
  displayName = getDisplayName(pn);
  pkgName = strTemplate.pkgprefix + className;

  pkgFileTemplate.name = pkgName;
  pkgFileTemplate.description = pd;
  pkgFileTemplate.enigma.classname = className;
  pkgFileTemplate.enigma.displayname = displayName;
  pkgFileTemplate.enigma.archetype = pt;

  if (pt === "service") {
    pkgFileTemplate.enigma.servicegroup = sgn;
    destDir = `${preDir}/services/${sgn}/${className}/`;
  } else {
    destDir = `${preDir}/controllers/${className}/`;
  }

  self.log(chalk.black("|"));
  self.log(chalk.black("|"));
  self.log(chalk.black("_______________________________"));
  self.log(chalk.gray("*******************************"));
  self.log(chalk.magenta("YOUR SELECTIONS"));
  self.log(chalk.gray("*******************************"));
  self.log(`Package Name: ${chalk.cyan(pn)} - <${chalk.cyan(pt)}>`);
  self.log(`Description: ${chalk.cyan(pd)}`);
  self.log(`Destination: ${chalk.cyan(dir)}`);
  self.log(chalk.black("_______________________________"));
  self.log(chalk.gray("*******************************"));
  self.log(chalk.magenta("INSTALLING"));
  self.log(chalk.gray("*******************************"));

  let completed = true;

  if (sg === "*CREATE NEW*") {
    try {
      fs.mkdirSync(`${preDir}/services/${nsg}`);
    } catch (e) {
      console.log(chalk.bold.red(e));
    }
  }

  try {
    if (directoryExists(destDir, true)) {
      const srcDir = `${frameworkDir}/cli/forge/${pt}_template/`;
      copyContents(srcDir, destDir);

      const pkgContent = `${JSON.stringify(pkgFileTemplate, null, 2)}\n`;
      fs.writeFileSync(`${destDir}package.json`, pkgContent);
      self.log(chalk.bold.cyan("Wrote package.json"));

      let licenseContent = LICENSE_TEMPLATE.replace(/(%N%)/g, displayName);
      licenseContent = licenseContent.replace(/(%T%)/g, className);
      fs.writeFileSync(`${destDir}LICENSE`, licenseContent);
      self.log(chalk.bold.cyan("Wrote LICENSE"));

      let readmeContent = README_TEMPLATE.replace(/(%N%)/g, displayName);
      readmeContent = readmeContent.replace(
        /(%T%)/g,
        `ENIGMA ${getDisplayName(pt)}`
      );
      readmeContent = readmeContent.replace(/(%t%)/g, pt);
      readmeContent = readmeContent.replace(/(%D%)/g, pd);
      fs.writeFileSync(`${destDir}README.md`, readmeContent);
      self.log(chalk.bold.cyan("Wrote README.md"));

      self.log(chalk.black("_______________________________"));
      self.log(chalk.gray("*******************************"));
      self.log(chalk.bold.green("INSTALLION COMPLETE!"));
      self.log(chalk.gray("*******************************"));
    } else {
      completed = false;
      self.log(chalk.black("|"));
      self.log(chalk.black("|"));
      self.log(
        chalk.bold.red("THERE WERE ERRORS DURING INSTALLATION. EXITING!")
      );
    }
  } catch (e) {
    completed = false;
    self.log(chalk.black("|"));
    self.log(chalk.black("|"));
    self.log(chalk.red(e));
  }

  if (completed) {
    self.prompt(repeatQuestions).then(answers2 => {
      if (answers2.askAgain) {
        self.prompt(questions).then(answers3 => {
          processRequest(self, answers3, cb);
        });
      } else {
        cb();
      }
    });
  } else {
    cb();
  }
}

function command_action(args, cb) {
  const self = this;
  const groupAarray = getDirectories(`${frameworkDir}/services`);
  if (groupAarray) {
    SERVICEGROUPS = ["*CREATE NEW*"];
    groupAarray.forEach(groupName => {
      SERVICEGROUPS.push(groupName);
    });
  }
  self.prompt(questions).then(answers => {
    processRequest(self, answers, cb);
  });
}

function COMMAND_CONSTRUCT() {
  this.command = "create";
  this.description = "Create a new Style-O-Matic package";
  this.action = command_action;
}

exports.plugin = new COMMAND_CONSTRUCT();
