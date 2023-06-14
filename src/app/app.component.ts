import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "liquid-test";
  template: string = "";

  ngOnInit() {
    this.template = `{% assign people = "alice, bob, carol" | split: ", " -%}
      <ul>
      {%- for person in people %}
        <li>
          <a href="{{person | prepend: "http://example.com/"}}">
            {{ person | capitalize }}
          </a>
        </li>
      {%- endfor%}
      </ul>`;
  }

  onClick() {
    this.template = `{{"hello" | capitalize}}`;
  }
}
