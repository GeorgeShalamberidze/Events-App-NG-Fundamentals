import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { Error404Component } from './errors/404.component';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';

import { 
  CreateEventComponent,
  EventRouteActivator,
  EventService,
  EventsListComponent,
  EventListResolver,
  EventDetailsComponent,
  EventThumbnailComponent,
  DurationPipe
} from "./events/index"
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/events-details/create-session.component';
import { SessionListComponent } from './events/events-details/session-list.component';
import { JQ_TOKEN, Toastr, CollapsibleWellComponent, TOASTR_TOKEN, SimpleModalComponent, ModalTriggerDirective } from './common/index';

declare let toastr: Toastr
declare let jQuery: any

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    Error404Component,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService, 
    { provide: TOASTR_TOKEN, useValue: toastr }, 
    { provide: JQ_TOKEN, useValue: jQuery }, 
    EventRouteActivator,
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState
    },
    EventListResolver,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm("Do you really want to cancel? you have not saved this event")
  }
  return true
}