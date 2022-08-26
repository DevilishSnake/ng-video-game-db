import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor () {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'X-RapidAPI-Key': 'bff27c62b8msh3571407046c9f4cp1facb2jsnb7d49086b9f8',
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
      },
      setParams: {
        key: '4f7bd80232094997b8c9d9e7d6c28e88'
      }
    });
    return next.handle(req);
  }
}
