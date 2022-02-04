import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class BaseAPI {

    private readonly baseServeUrl;

    constructor(public http: HttpClient) {
        this.baseServeUrl = environment.api.host;
    }

    private getUrl(url: string = ''): string {
        return this.baseServeUrl.concat(url);
    }

    public get(url: string = ''): Observable<any> {
        return this.http.get(this.getUrl(url))
    }
}