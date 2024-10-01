import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Event {
  name: string;
  date: Date;
  description: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule for pipes like date
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  upcomingEvents: Event[] = [
    {
      name: 'Fundraiser for Lebanon: Traditional Souvenir Sale',
      date: new Date('2024-10-4'),
      description: 'A charity run event to raise funds for the Children\'s Cancer Center of Lebanon.'
    }
  ];

  pastEvents: Event[] = []; // Now explicitly typed as an array of Event
}
