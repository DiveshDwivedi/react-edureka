interface Person {
    id: number;
    name: string;
    email: string;
}

interface Event {
    id: number;
    name: string;
    location: string
    date: Date;
    organizer: Organizer;
    attendees: Person[];
    addAttendee(attendee: Person) : void;
    removeAttendee(attendeeId: number): void;
}


class Organizer implements Person {
    id: number;
    name: string;
    email: string;
    event: Event[];

    constructor(event: Event[] = []) {
        this.event = event;
    }

    createEvent(event: Event): void {
       this.event.push(event);
    }
}

class User implements Person {
    id: number;
    name: string;
    email: string;
    rsvp_event: Event[];

    constructor(rsvp: Event[] = []) {
        this.rsvp_event = rsvp;
    }

    rsvp(event: Event) : void {
        this.rsvp_event.push(event);
    }

    cancelRsvp(eventId: number): void {
      const cancel_rsvp_event = this.rsvp_event.findIndex((event) => event.id === eventId);
      this.rsvp_event.slice(cancel_rsvp_event, 1);
    }
}


class EventManagement {
    attendees: Person[];
    events: Event[];

    constructor(event: Event[] = [], attendee: Person[] = []) {
        this.events = event;
        this.attendees = attendee;
    }

    addEvent(event: Event): void {
       this.events.push(event);
    }

    addAttendees(attendee: Person): void {
        this.attendees.push(attendee);
     }

    removeEvent(eventId: number): void {
        const event_remove = this.events.findIndex((event) => eventId === event.id);

        this.events.slice(event_remove,1);
    }
    removeAttendee(attendeeId: number): void {
        const attendee_remove = this.attendees.findIndex((attendee) => attendeeId === attendee.id);

        this.attendees.slice(attendee_remove,1);
    }

    filterEventsByLocation(location: string): Event[] {
        return this.events.filter((event) => event.location === location);
    }

    sendNotifications(eventId: number, message: string): void {
        // Write code to send mail.
    }
}
