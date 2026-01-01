import chalk from "chalk";
import type figlet from "figlet";
import { loadModule } from "../utils/loader.js";

const bannerColors = [
  chalk.hex("#667eea"), // Purple
  chalk.hex("#764ba2"), // Deep purple
  chalk.hex("#5b86e5"), // Blue
  chalk.hex("#36d1dc"), // Cyan
  chalk.hex("#667eea"), // Back to purple
];

async function animateBanner(text: string, cycles = 2, delay = 100): Promise<void> {
  for (let i = 0; i < cycles * bannerColors.length; i++) {
    console.clear();
    const colorFn = bannerColors[i % bannerColors.length];
    if (colorFn) {
      console.log(colorFn(text));
    }
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}

export async function showBanner(skipAnimation: boolean): Promise<void> {
  if (skipAnimation) {
    return;
  }

  try {
    const figletModule = await loadModule<typeof figlet>("figlet");
    const bannerText = figletModule.textSync("Hello There!", {
      font: "Slant",
      horizontalLayout: "default",
      verticalLayout: "default",
    });
    await animateBanner(bannerText, 2, 100);
  } catch (_error) {
    // Fallback if figlet fails
    console.log(chalk.bold.hex("#667eea")("\n=== Hello There! ===\n"));
  }
}

