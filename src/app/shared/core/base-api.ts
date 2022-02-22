import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class BaseAPI {

    private readonly baseServeUrl;

    constructor(public http: HttpClient) {
        this.baseServeUrl = environment.api.host
    }

    private getUrl(url: string = ''): string {
        return this.baseServeUrl.concat(url);
    }

    protected get(url: string = ''): Observable<any> {
        return this.http.get(this.getUrl(url))
    }

    protected post(url: string = '', body: any): Observable<any> {
        
        const headers = new HttpHeaders({
            'Content-Type':'application/json; charset=utf8'
        })
        return this.http.post(this.getUrl(url), body,{headers})
    }

    protected delete(url: string = ''): Observable<any> {
        return this.http.delete(this.getUrl(url))
    }

    protected put(url: string = '', body: any): Observable<any> {
        return this.http.put(this.getUrl(url), body)
    }
}