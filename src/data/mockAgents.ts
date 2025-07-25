export interface Agent {
  id: string;
  name: string;
  email: string;
}

export const mockAgents: Agent[] = [
  { id: "1", name: "Sarah Johnson", email: "sarah.johnson@company.com" },
  { id: "2", name: "Mike Wilson", email: "mike.wilson@company.com" },
  { id: "3", name: "Jennifer Davis", email: "jennifer.davis@company.com" },
  { id: "4", name: "Robert Chen", email: "robert.chen@company.com" },
  { id: "5", name: "Lisa Thompson", email: "lisa.thompson@company.com" }
];

export const currentAgent: Agent = {
  id: "1",
  name: "Sarah Johnson", 
  email: "sarah.johnson@company.com"
};