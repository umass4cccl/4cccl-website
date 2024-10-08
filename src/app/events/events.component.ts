import { Component, OnInit } from '@angular/core';

interface Event {
  title: string;
  date: string; // The date should be in a format like 'YYYY-MM-DD' for easy comparison
  description: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  upcomingEvents: Event[] = [];
  pastEvents: Event[] = [];

  // Array of events
  events: Event[] = [
    {
      title: 'Fundraiser for Lebanon: Traditional Souvenir Sale',
      date: '2024-10-04',
      description: 'A charity run event to raise funds for the Children\'s Cancer Center of Lebanon.'
    },
    // Add more events here
  ];

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format

    this.events.forEach(event => {
      if (event.date >= today) {
        this.upcomingEvents.push(event);
      } else {
        this.pastEvents.push(event);
      }
    });
  }
}
