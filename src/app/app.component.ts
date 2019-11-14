import { Component, OnInit, Inject } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-theming-vanilla';

  constructor(private themeSvc: ThemeService) {}

  ngOnInit() {}
}
