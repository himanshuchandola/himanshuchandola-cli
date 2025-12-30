import { describe, expect, it } from "vitest";
import { loadModule } from "../../src/utils/loader";

describe("loadModule", () => {
  it("should load a valid module", async () => {
    const chalk = await loadModule("chalk");
    expect(chalk).toBeDefined();
  });

  it("should throw error for invalid module", async () => {
    await expect(loadModule("non-existent-module-xyz")).rejects.toThrow();
  });
});
