import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  isBlurred: boolean;
  private apiAuthUrl: string =
    "https://github-purge.herokuapp.com/api/auth/github";
  toggleBlurred(): void {
    this.isBlurred = !this.isBlurred;
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.isBlurred = false;
  }
}
