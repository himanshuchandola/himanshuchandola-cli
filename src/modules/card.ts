import boxen from "boxen";
import chalk from "chalk";
import { personalConfig } from "../config/personal.js";

export function createCard(): string {
  const name = chalk.bold.hex("#667eea")(personalConfig.name);
  const role = chalk.hex("#a8b2d1")(`${personalConfig.role} @ ${personalConfig.company}`);
  const tagline = chalk.hex("#8892b0")("Building elegant solutions, one line at a time");

  const portfolio = chalk.hex("#64ffda")(personalConfig.portfolio);
  const github = chalk.hex("#64ffda")(personalConfig.links.github);
  const linkedin = chalk.hex("#64ffda")(personalConfig.links.linkedin);
  const peerlist = chalk.hex("#64ffda")(personalConfig.links.peerlist);
  const twitter = chalk.hex("#64ffda")(personalConfig.links.twitter);

  // Responsive box width based on terminal columns
  const width = Math.min(80, Math.max(40, (process.stdout.columns || 80) - 10));

  const card = boxen(
    [
      `${name}`,
      `${tagline}`,
      "",
      `${role}`,
      "",
      `${chalk.hex("#a8b2d1")("Portfolio")}  ${portfolio}`,
      `${chalk.hex("#a8b2d1")("GitHub")}     ${github}`,
      `${chalk.hex("#a8b2d1")("LinkedIn")}   ${linkedin}`,
      `${chalk.hex("#a8b2d1")("Peerlist")}   ${peerlist}`,
      `${chalk.hex("#a8b2d1")("Twitter")}    ${twitter}`,
    ].join("\n"),
    {
      padding: 1,
      margin: 1,
      borderStyle: "double",
      borderColor: "#667eea",
      width,
    },
  );

  return card;
}

export function showCard(): void {
  console.log(chalk.hex("#8892b0")("\n Welcome to my interactive cli digital space\n"));
  console.log(createCard());
}
// Polish 2026
