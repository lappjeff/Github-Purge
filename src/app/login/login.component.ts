import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  isBlurred: boolean;

  toggleBlurred(): void {
    this.isBlurred = !this.isBlurred;
  }

  constructor() {}

  ngOnInit() {
    this.isBlurred = false;
  }
}
