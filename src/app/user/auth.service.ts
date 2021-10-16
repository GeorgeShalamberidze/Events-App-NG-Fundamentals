import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    currentUser!: IUser
    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            firstName: "George",
            lastName: "Shalamberidze",
            userName: userName
        }
    }

    isAuthenticated () {
        return !!this.currentUser
    }
}