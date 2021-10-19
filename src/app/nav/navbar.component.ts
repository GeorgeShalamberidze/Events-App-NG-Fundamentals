import { Component } from "@angular/core";
import { EventService, ISession } from "../events";
import { AuthService } from "../user/auth.service";

@Component({
    selector: "nav-bar",
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-rigt: 100px; }
        @media (max-width: 1200px) { #searchForm {display: none; } }
        li > a.active { color: #F97924; }
    `]
})

export class NavBarComponent {
    searchTerm: string = ''
    foundSessions!: ISession[]
    constructor(public authService: AuthService, private eventService: EventService){

    }

    searchSessions(term: string) {
        this.eventService.searchSessions(term).subscribe((s: any) => {
            this.foundSessions = s
        })
    }
}