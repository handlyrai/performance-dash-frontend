import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, Video } from "lucide-react";
import { useState } from "react";

export function GoogleMeetScheduler() {
  const [selectedRep, setSelectedRep] = useState("");
  const [meetingTitle, setMeetingTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const salesReps = [
    "Sarah Chen",
    "Michael Rodriguez", 
    "Emily Johnson",
    "David Park",
    "Lisa Thompson",
    "James Wilson"
  ];

  const handleScheduleMeeting = () => {
    // In a real app, this would integrate with Google Calendar API
    console.log("Scheduling meeting:", {
      rep: selectedRep,
      title: meetingTitle,
      date: selectedDate,
      time: selectedTime
    });
  };

  return (
    <Card className="bg-gradient-card shadow-card border-border/50">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <Video className="h-5 w-5 text-primary" />
          Schedule Team Meeting
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="meeting-title">Meeting Title</Label>
          <Input
            id="meeting-title"
            placeholder="Weekly performance review"
            value={meetingTitle}
            onChange={(e) => setMeetingTitle(e.target.value)}
            className="bg-background border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="rep-select">Select Rep</Label>
          <Select value={selectedRep} onValueChange={setSelectedRep}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Choose a team member" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Team Members</SelectItem>
              {salesReps.map((rep) => (
                <SelectItem key={rep} value={rep}>{rep}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="meeting-date">Date</Label>
            <Input
              id="meeting-date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-background border-border"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="meeting-time">Time</Label>
            <Input
              id="meeting-time"
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="bg-background border-border"
            />
          </div>
        </div>

        <Button 
          onClick={handleScheduleMeeting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          disabled={!selectedRep || !meetingTitle || !selectedDate || !selectedTime}
        >
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Google Meet
        </Button>

        <div className="text-xs text-muted-foreground space-y-1">
          <div className="flex items-center gap-2">
            <Clock className="h-3 w-3" />
            Meeting link will be sent automatically
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-3 w-3" />
            Calendar invites sent to participants
          </div>
        </div>
      </CardContent>
    </Card>
  );
}