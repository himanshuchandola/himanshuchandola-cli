import { describe, expect, it } from "vitest";
import { parseFlags, showHelp } from "../../src/utils/flags";

describe("parseFlags", () => {
  it("should parse help flag", () => {
    const flags = parseFlags(["--help"]);
    expect(flags.help).toBe(true);
    expect(flags.noAnim).toBe(false);
  });

  it("should parse short help flag", () => {
    const flags = parseFlags(["-h"]);
    expect(flags.help).toBe(true);
  });

  it("should parse no-anim flag", () => {
    const flags = parseFlags(["--no-anim"]);
    expect(flags.noAnim).toBe(true);
    expect(flags.help).toBe(false);
  });

  it("should parse open flag with valid destination", () => {
    const flags = parseFlags(["--open=github"]);
    expect(flags.open).toBe("github");
  });

  it("should parse open flag with portfolio", () => {
    const flags = parseFlags(["--open=portfolio"]);
    expect(flags.open).toBe("portfolio");
  });

  it("should ignore invalid open destination", () => {
    const flags = parseFlags(["--open=invalid"]);
    expect(flags.open).toBeUndefined();
  });

  it("should parse multiple flags", () => {
    const flags = parseFlags(["--no-anim", "--help"]);
    expect(flags.noAnim).toBe(true);
    expect(flags.help).toBe(true);
  });

  it("should return default flags for empty array", () => {
    const flags = parseFlags([]);
    expect(flags.help).toBe(false);
    expect(flags.noAnim).toBe(false);
    expect(flags.open).toBeUndefined();
  });
});

describe("showHelp", () => {
  it("should not throw error", () => {
    expect(() => showHelp()).not.toThrow();
  });
});
