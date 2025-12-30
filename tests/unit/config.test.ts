import { describe, expect, it } from "vitest";
import { personalConfig } from "../../src/config/personal";

describe("personalConfig", () => {
  it("should have required name field", () => {
    expect(personalConfig.name).toBe("Himanshu Chandola");
  });

  it("should have required role field", () => {
    expect(personalConfig.role).toBe("Software Engineer");
  });

  it("should have required company field", () => {
    expect(personalConfig.company).toBe("Exiliensoft Consulting Services");
  });

  it("should have valid portfolio URL", () => {
    expect(personalConfig.portfolio).toMatch(/^https?:\/\//);
    expect(personalConfig.portfolio).toBe("https://himanshuchandola.dev");
  });

  it("should have all required social links", () => {
    expect(personalConfig.links.github).toMatch(/^https?:\/\//);
    expect(personalConfig.links.linkedin).toMatch(/^https?:\/\//);
    expect(personalConfig.links.peerlist).toMatch(/^https?:\/\//);
    expect(personalConfig.links.twitter).toMatch(/^https?:\/\//);
  });

  it("should have valid GitHub URL", () => {
    expect(personalConfig.links.github).toContain("github.com");
    expect(personalConfig.links.github).toContain("himanshuchandola");
  });

  it("should have valid LinkedIn URL", () => {
    expect(personalConfig.links.linkedin).toContain("linkedin.com");
  });

  it("should have valid Peerlist URL", () => {
    expect(personalConfig.links.peerlist).toContain("peerlist.io");
  });

  it("should have valid Twitter URL", () => {
    expect(personalConfig.links.twitter).toMatch(/x\.com|twitter\.com/);
  });
});
