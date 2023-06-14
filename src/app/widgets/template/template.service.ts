import { Injectable } from "@angular/core";
import { Liquid } from "liquidjs";
import { Observable, from } from "rxjs";

@Injectable({ providedIn: "root" })
export class TemplateService {
  constructor() {}

  private engine = new Liquid();

  parse(content: string): Observable<string> {
    return from(this.engine.parseAndRender(content));
  }
}
