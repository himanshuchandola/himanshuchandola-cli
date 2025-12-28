import type { CLIFlags } from "../types/index.js";

export function parseFlags(argv: string[]): CLIFlags {
  const flags: CLIFlags = {
    help: false,
    noAnim: false,
  };

  for (const arg of argv) {
    if (arg === "--help" || arg === "-h") {
      flags.help = true;
    } else if (arg === "--no-anim") {
      flags.noAnim = true;
    } else if (arg.startsWith("--open=")) {
      const value = arg.slice(7) as CLIFlags["open"];
      if (
        value === "portfolio" ||
        value === "github" ||
        value === "linkedin" ||
        value === "peerlist" ||
        value === "twitter"
      ) {
        flags.open = value;
      }
    }
  }

  return flags;
}

export function showHelp(): void {
  console.log(`
Usage: himanshuchandola [options]

Options:
  --open=portfolio|github|linkedin|peerlist|twitter   Open a link directly and exit
  --no-anim                                            Skip banner animation
  -h, --help                                           Show this help
`);
}
