import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface RolloverFiltersProps {
  onFiltersChange: (filters: any) => void;
}

export function RolloverFilters({ onFiltersChange }: RolloverFiltersProps) {
  const [filters, setFilters] = useState({
    deadlineDate: undefined as Date | undefined,
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

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
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
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="deadline-date">Deadline Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !filters.deadlineDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {filters.deadlineDate ? format(filters.deadlineDate, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={filters.deadlineDate}
                onSelect={(date) => handleFilterChange("deadlineDate", date)}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="agent">Agent</Label>
          <Input
            id="agent"
            value={filters.agent}
            onChange={(e) => handleFilterChange("agent", e.target.value)}
            placeholder="Agent name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="queue">Queue</Label>
          <Input
            id="queue"
            value={filters.queue}
            onChange={(e) => handleFilterChange("queue", e.target.value)}
            placeholder="Queue name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="source">Source</Label>
          <Input
            id="source"
            value={filters.source}
            onChange={(e) => handleFilterChange("source", e.target.value)}
            placeholder="Source"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={filters.firstName}
              onChange={(e) => handleFilterChange("firstName", e.target.value)}
              placeholder="First name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={filters.lastName}
              onChange={(e) => handleFilterChange("lastName", e.target.value)}
              placeholder="Last name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            value={filters.email}
            onChange={(e) => handleFilterChange("email", e.target.value)}
            placeholder="Email address"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={filters.phone}
            onChange={(e) => handleFilterChange("phone", e.target.value)}
            placeholder="Phone number"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="origin">Origin</Label>
          <Input
            id="origin"
            value={filters.origin}
            onChange={(e) => handleFilterChange("origin", e.target.value)}
            placeholder="Origin institution"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <Input
            id="destination"
            value={filters.destination}
            onChange={(e) => handleFilterChange("destination", e.target.value)}
            placeholder="Destination institution"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="employer">Employer</Label>
          <Input
            id="employer"
            value={filters.employer}
            onChange={(e) => handleFilterChange("employer", e.target.value)}
            placeholder="Employer"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="originType">Origin Type</Label>
          <Select value={filters.originType} onValueChange={(value) => handleFilterChange("originType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select origin type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="401k">401(k)</SelectItem>
              <SelectItem value="403b">403(b)</SelectItem>
              <SelectItem value="ira">IRA</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="propensity">Propensity</Label>
          <Select value={filters.propensity} onValueChange={(value) => handleFilterChange("propensity", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select propensity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="affiliate">Affiliate</Label>
          <Input
            id="affiliate"
            value={filters.affiliate}
            onChange={(e) => handleFilterChange("affiliate", e.target.value)}
            placeholder="Affiliate"
          />
        </div>

        <Button onClick={clearFilters} variant="outline" className="w-full">
          Clear Filters
        </Button>
      </CardContent>
    </Card>
  );
}