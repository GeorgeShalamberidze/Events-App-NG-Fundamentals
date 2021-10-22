import { Routes } from "@angular/router";
import { Error404Component } from "./app/errors/404.component";
import { EventResolver } from "./app/events/event-resolver.service";
import { 
    CreateEventComponent,
    EventDetailsComponent,
    EventListResolver,
    EventsListComponent,
    CreateSessionComponent
} from "./app/events/index"

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {
        events: EventListResolver
    } },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
    { path: "events/session/new", component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { 
        path: "user", 
        loadChildren: () => import('./app/user/user.module')
            .then(m => m.UserModule),
            
    },
    { path: "**", redirectTo: "/events" },
]