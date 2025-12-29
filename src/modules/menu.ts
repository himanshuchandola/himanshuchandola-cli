import type { Spinner } from "cli-spinners";
import type { Answers } from "inquirer";
import type { Ora } from "ora";
import { personalConfig } from "../config/personal.js";
import type { Destination, MenuChoice } from "../types/index.js";
import { loadModule } from "../utils/loader.js";
import { safeOpen } from "../utils/open.js";

const menuChoices: MenuChoice[] = [
  { name: "→ Visit Portfolio - Check out my work and projects", value: "portfolio" },
  { name: "→ GitHub Profile - Explore my open source contributions", value: "github" },
  { name: "→ LinkedIn - Let's connect professionally", value: "linkedin" },
  { name: "→ Peerlist - View my professional timeline", value: "peerlist" },
  { name: "→ Twitter/X - Follow for tech insights", value: "twitter" },
  { name: "← Exit", value: "exit" },
];

const destinationUrls: Record<Exclude<Destination, "exit">, string> = {
  portfolio: personalConfig.portfolio,
  github: personalConfig.links.github,
  linkedin: personalConfig.links.linkedin,
  peerlist: personalConfig.links.peerlist,
  twitter: personalConfig.links.twitter,
};

const loadingMessages: Record<Exclude<Destination, "exit">, string> = {
  portfolio: "Loading portfolio...",
  github: "Opening GitHub profile...",
  linkedin: "Connecting to LinkedIn...",
  peerlist: "Loading Peerlist profile...",
  twitter: "Opening Twitter/X...",
};

async function showRedirectLoader(message: string, url: string): Promise<void> {
  const ora = await loadModule<typeof import("ora").default>("ora");
  const cliSpinners = await loadModule<{ dots: Spinner }>("cli-spinners");

  const loader: Ora = ora({
    text: message,
    spinner: cliSpinners.dots,
    color: "magenta",
  }).start();

  setTimeout(async () => {
    loader.succeed(message);
    await safeOpen(url);
  }, 1200);
}

export async function showMenu(): Promise<void> {
  const inquirer = await loadModule<typeof import("inquirer").default>("inquirer");
  const ora = await loadModule<typeof import("ora").default>("ora");
  const cliSpinners = await loadModule<{ dots: Spinner }>("cli-spinners");

  // Show loader before menu
  const menuLoader: Ora = ora({
    text: "Initializing menu...",
    spinner: cliSpinners.dots,
    color: "magenta",
  }).start();

  setTimeout(() => {
    menuLoader.stop();

    const questions = [
      {
        type: "rawlist" as const,
        name: "action",
        message: "What would you like to explore?",
        choices: menuChoices,
      },
    ];

    inquirer
      .prompt(questions)
      .then(async (answers: Answers) => {
        const action = answers.action as Destination;

        if (action === "exit") {
          console.log("👋 Thanks for stopping by—see you around!");
          return;
        }

        const url = destinationUrls[action];
        const message = loadingMessages[action];
        if (url && message) {
          await showRedirectLoader(message, url);
        }
      })
      .catch((error: Error) => {
        if (error.message?.includes("SIGINT")) {
          console.log("✋ Caught Ctrl+C. Take care and have a great day!");
        } else {
          console.log("Prompt closed. Until next time! 👋");
        }
        process.exitCode = 0;
      });
  }, 900);
}
