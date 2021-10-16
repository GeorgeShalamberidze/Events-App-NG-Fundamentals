import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from ".";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";

declare let toastr: any
@Component({
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr />
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>

    </div>
    `
})

export class EventsListComponent implements OnInit {
    events!: IEvent[]

    constructor(
            private eventService: EventService,
            private toastrService: ToastrService,
            private route: ActivatedRoute
        ) {
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName: any) {
        this.toastrService.success(eventName)
    }
}