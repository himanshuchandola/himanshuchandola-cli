import open from "open";

export async function safeOpen(url: string): Promise<void> {
  try {
    await open(url);
  } catch (_error) {
    console.log(`\nCouldn't open automatically. Here's the link:\n${url}\n`);
  }
}
