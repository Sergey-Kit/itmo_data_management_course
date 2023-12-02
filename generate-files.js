import { run } from "@mermaid-js/mermaid-cli";

await run("src/Components.md", "docs/Components.svg");
await run("src/Container.md", "docs/Container.svg");
await run("src/Context.md", "docs/Context.svg");
await run("src/Requirements.md", "docs/Requirements.svg");

