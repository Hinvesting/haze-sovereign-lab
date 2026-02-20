/**
 * 🦞 HAZE-SOVEREIGN AGENT TEMPLATE
 * The Blueprint for ANY specialist agent in the Haze-Sovereign Lab.
 */

const { Agent } = require('openclaw');

const MyAgent = new Agent({
  name: "Specialist_Name",
  
  // 1. THE SOUL (Identity) - Metaphor: The Job Description. 
  identity: `
    You are a [Role Name]. Your primary goal is to [Specific Objective].
    Always act with [Tone] and prioritize [Constraint].
  `,

  // 2. THE BRAIN (Skills) - Metaphor: The Resume. 
  skills: ["data_extraction", "analysis", "reporting"],

  // 3. THE HANDS (Tools) - Metaphor: The Toolbox. 
  tools: ["tavily_search", "google_drive_sync", "telegram_notify"]
});

MyAgent.on('start', async (task) => {
  console.log("ACTION: Agent initiated mission.");
});
