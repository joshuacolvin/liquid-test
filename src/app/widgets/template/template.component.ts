import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Observable } from "rxjs";
import { TemplateService } from "./template.service";

@Component({
  selector: "app-template-widget",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.css"],
})
export class TemplateComponent implements OnChanges {
  @Input() content: string = "";

  public template!: Observable<string>;

  constructor(private templateWidgetService: TemplateService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.template = this.templateWidgetService.parse(
      changes?.["content"]?.currentValue
    );
  }
}
