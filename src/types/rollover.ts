export interface Rollover {
  id: string;
  appointmentAgent: string;
  client: string;
  description: string;
  source: string;
  queue: string;
  timestamp: Date;
  status: 'assigned' | 'unassigned';
  propensity: 'high' | 'medium' | 'low';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  origin: string;
  destination: string;
  employer: string;
  originType: '401k' | '403b' | 'ira';
  affiliate: string;
  deadlineDate: Date;
}

export interface RolloverFilters {
  deadlineDate?: Date;
  agent: string;
  queue: string;
  source: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  origin: string;
  destination: string;
  employer: string;
  originType: string;
  propensity: string;
  affiliate: string;
}