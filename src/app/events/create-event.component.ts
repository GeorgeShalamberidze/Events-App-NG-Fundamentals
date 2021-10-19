import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { EventService } from '.';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em { float: right; color: pink; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::placeholder { color: #999; }
  `]
})

export class CreateEventComponent {
    isDirty: boolean = true
    newEvent!: any
    constructor(private router: Router, private eventService: EventService) {

    }
    cancel() {
        this.router.navigate(['/events'])
    }

    saveEvent(formValue: any) {
        this.eventService.saveEvent(formValue)
        this.isDirty = false
        this.router.navigate(['/events'])
    }
}