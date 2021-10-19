import { InjectionToken } from "@angular/core";

// new way of injecting 3rd party dependency in classes
export let JQ_TOKEN = new InjectionToken<Object>('jQuery')