#!/usr/bin/env node

import { personalConfig } from "./config/personal.js";
import { showBanner } from "./modules/banner.js";
import { showCard } from "./modules/card.js";
import { showMenu } from "./modules/menu.js";
import type { Destination } from "./types/index.js";
import { parseFlags, showHelp } from "./utils/flags.js";
import { safeOpen } from "./utils/open.js";

// Environment detection
const isCI = process.env.CI === "true" || process.env.CI === "1";
const isInteractive = process.stdin.isTTY && process.stdout.isTTY;

// Parse command line arguments
const argv = process.argv.slice(2);
const flags = parseFlags(argv);

// Destination URL mapping
const destinationUrls: Record<Exclude<Destination, "exit">, string> = {
  portfolio: personalConfig.portfolio,
  github: personalConfig.links.github,
  linkedin: personalConfig.links.linkedin,
  peerlist: personalConfig.links.peerlist,
  twitter: personalConfig.links.twitter,
};

async function main(): Promise<void> {
  // Handle help flag
  if (flags.help) {
    showHelp();
    process.exit(0);
  }

  // Handle direct open flag
  if (flags.open && flags.open !== "exit") {
    const url = destinationUrls[flags.open];
    if (url) {
      await safeOpen(url);
      process.exit(0);
    }
  }

  // Non-interactive fallback (CI or piped)
  if (!isInteractive) {
    console.log("\nQuick links:");
    console.log(`- Portfolio: ${personalConfig.portfolio}`);
    console.log(`- GitHub:    ${personalConfig.links.github}`);
    console.log(`- LinkedIn:  ${personalConfig.links.linkedin}`);
    console.log(`- Peerlist:  ${personalConfig.links.peerlist}`);
    console.log(`- Twitter:   ${personalConfig.links.twitter}\n`);
    process.exit(0);
  }

  // Graceful signal handling
  process.on("SIGTERM", () => {
    console.log("✋ Received SIGTERM. Bye!");
    process.exit(0);
  });

  process.on("SIGINT", () => {
    console.log("\n✋ Caught Ctrl+C. Take care and have a great day!");
    process.exit(0);
  });

  try {
    // Show animated banner (unless --no-anim)
    await showBanner(flags.noAnim || isCI);

    // Show personal information card
    showCard();

    // Show interactive menu
    await showMenu();
  } catch (error) {
    if (error instanceof Error && error.message?.includes("SIGINT")) {
      console.log("✋ Caught Ctrl+C. Take care and have a great day!");
      process.exitCode = 0;
    } else {
      console.log("Prompt closed. Until next time! 👋");
      process.exitCode = 0;
    }
  }
}

main().catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});
