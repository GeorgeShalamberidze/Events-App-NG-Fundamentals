import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { ISession } from "..";

@Injectable()
export class VoterService {
    constructor(private http: HttpClient) {

    }
    deleteVoter(eventId: number, session: ISession, voterName: any) {
        session.voters = session.voters.filter(voter => voter !== voterName)
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`

        this.http
            .delete(url)
            .pipe(catchError(this.handleError("deleteVoter")))
            .subscribe
    }

    addVoter(eventId: number, session: ISession, voterName: any) {
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        const options = {
            headers: new HttpHeaders({"Content-Type": "/application/json"})
        }
        session.voters.push(voterName)
        this.http
            .post(url, {}, options)
            .pipe(catchError(this.handleError("addVoter")))
            .subscribe()
    }

    userHasVoted(session: ISession, voterName: any) {
        return session.voters.some(voter => voter === voterName)
    }

    private handleError<T> (operation = "operation", result?: T) {
        return (error: any): Observable<T> => {
          console.log(error)
          return of(result as T)
        }
    }
}