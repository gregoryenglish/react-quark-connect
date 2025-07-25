import { Rollover } from "@/types/rollover";

export const mockRollovers: Rollover[] = [
  {
    id: "1",
    appointmentAgent: "Sarah Johnson",
    client: "John Smith",
    description: "401k rollover from previous employer to new IRA account",
    source: "Morgan Stanley",
    queue: "Priority Queue",
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    status: "assigned",
    propensity: "high",
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@email.com",
    phone: "(555) 123-4567",
    origin: "Previous Employer 401k",
    destination: "Fidelity IRA",
    employer: "Tech Corp",
    originType: "401k",
    affiliate: "Northeast Branch",
    deadlineDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
  },
  {
    id: "2",
    appointmentAgent: "",
    client: "Mary Davis",
    description: "403b to IRA conversion for retirement planning",
    source: "Vanguard",
    queue: "Standard Queue",
    timestamp: new Date(Date.now() - 20 * 60 * 1000), // 20 minutes ago
    status: "unassigned",
    propensity: "medium",
    firstName: "Mary",
    lastName: "Davis",
    email: "mary.davis@email.com",
    phone: "(555) 987-6543",
    origin: "University 403b",
    destination: "Schwab IRA",
    employer: "State University",
    originType: "403b",
    affiliate: "Central Branch",
    deadlineDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 14 days from now
  },
  {
    id: "3",
    appointmentAgent: "Mike Wilson",
    client: "Robert Brown",
    description: "IRA consolidation from multiple accounts",
    source: "TD Ameritrade",
    queue: "Express Queue",
    timestamp: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
    status: "assigned",
    propensity: "low",
    firstName: "Robert",
    lastName: "Brown",
    email: "robert.brown@email.com",
    phone: "(555) 555-5555",
    origin: "Multiple IRA Accounts",
    destination: "Consolidated IRA",
    employer: "Consulting LLC",
    originType: "ira",
    affiliate: "West Coast Branch",
    deadlineDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days from now
  },
  {
    id: "4",
    appointmentAgent: "",
    client: "Lisa Anderson",
    description: "401k rollover due to job change",
    source: "Charles Schwab",
    queue: "Standard Queue",
    timestamp: new Date(Date.now() - 18 * 60 * 1000), // 18 minutes ago
    status: "unassigned",
    propensity: "high",
    firstName: "Lisa",
    lastName: "Anderson",
    email: "lisa.anderson@email.com",
    phone: "(555) 111-2222",
    origin: "Former Employer 401k",
    destination: "New Employer 401k",
    employer: "Finance Corp",
    originType: "401k",
    affiliate: "Downtown Branch",
    deadlineDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) // 5 days from now
  },
  {
    id: "5",
    appointmentAgent: "",
    client: "David Wilson",
    description: "403b to 401k transfer for better investment options",
    source: "TIAA-CREF",
    queue: "Priority Queue",
    timestamp: new Date(Date.now() - 25 * 60 * 1000), // 25 minutes ago
    status: "unassigned",
    propensity: "medium",
    firstName: "David",
    lastName: "Wilson",
    email: "david.wilson@email.com",
    phone: "(555) 333-4444",
    origin: "School District 403b",
    destination: "Corporate 401k",
    employer: "Public Schools",
    originType: "403b",
    affiliate: "South Branch",
    deadlineDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000) // 10 days from now
  }
];