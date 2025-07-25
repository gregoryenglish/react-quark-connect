import { useState, useMemo } from "react";
import { RolloverFilters } from "@/components/RolloverFilters";
import { RolloverSummary } from "@/components/RolloverSummary";
import { RolloverTable } from "@/components/RolloverTable";
import { mockRollovers } from "@/data/mockRollovers";
import { RolloverFilters as FilterType } from "@/types/rollover";

const Index = () => {
  const [filters, setFilters] = useState<FilterType>({
    deadlineDate: undefined,
    agent: "",
    queue: "",
    source: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    origin: "",
    destination: "",
    employer: "",
    originType: "",
    propensity: "",
    affiliate: ""
  });

  const filteredRollovers = useMemo(() => {
    return mockRollovers.filter(rollover => {
      if (filters.deadlineDate && rollover.deadlineDate.toDateString() !== filters.deadlineDate.toDateString()) return false;
      if (filters.agent && !rollover.appointmentAgent.toLowerCase().includes(filters.agent.toLowerCase())) return false;
      if (filters.queue && !rollover.queue.toLowerCase().includes(filters.queue.toLowerCase())) return false;
      if (filters.source && !rollover.source.toLowerCase().includes(filters.source.toLowerCase())) return false;
      if (filters.firstName && !rollover.firstName.toLowerCase().includes(filters.firstName.toLowerCase())) return false;
      if (filters.lastName && !rollover.lastName.toLowerCase().includes(filters.lastName.toLowerCase())) return false;
      if (filters.email && !rollover.email.toLowerCase().includes(filters.email.toLowerCase())) return false;
      if (filters.phone && !rollover.phone.includes(filters.phone)) return false;
      if (filters.origin && !rollover.origin.toLowerCase().includes(filters.origin.toLowerCase())) return false;
      if (filters.destination && !rollover.destination.toLowerCase().includes(filters.destination.toLowerCase())) return false;
      if (filters.employer && !rollover.employer.toLowerCase().includes(filters.employer.toLowerCase())) return false;
      if (filters.originType && rollover.originType !== filters.originType) return false;
      if (filters.propensity && rollover.propensity !== filters.propensity) return false;
      if (filters.affiliate && !rollover.affiliate.toLowerCase().includes(filters.affiliate.toLowerCase())) return false;
      return true;
    });
  }, [filters]);

  const summary = useMemo(() => {
    const totalRollovers = filteredRollovers.length;
    const unassignedRollovers = filteredRollovers.filter(r => r.status === 'unassigned').length;
    const now = new Date();
    const unassignedOver15Min = filteredRollovers.filter(r => 
      r.status === 'unassigned' && 
      (now.getTime() - r.timestamp.getTime()) > 15 * 60 * 1000
    ).length;

    return {
      totalRollovers,
      unassignedRollovers,
      unassignedOver15Min
    };
  }, [filteredRollovers]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Rollover Queue Management</h1>
        
        <RolloverSummary {...summary} />
        
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <RolloverFilters onFiltersChange={setFilters} />
          </div>
          
          <div className="flex-1">
            <RolloverTable rollovers={filteredRollovers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
