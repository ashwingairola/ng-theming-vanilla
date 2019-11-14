import { Component, OnInit, Inject } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-theming-vanilla';
  themeForm: FormGroup;

  constructor(private themeSvc: ThemeService) {
    this.themeForm = new FormGroup({
      theme: new FormControl('theme-default')
    });
  }

  ngOnInit() {
    this.themeSvc.initTheme();
  }

  applyTheme() {
    this.themeSvc.changeTheme(this.themeForm.value.theme);
  }
}
