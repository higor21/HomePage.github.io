var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '../../node_modules/@angular/platform-browser';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            /*   imports: [
                RouterModule,
                CommonModule,
                RouterModule.forRoot(routes)
              ],
              exports: [ RouterModule ],
              declarations: [
                ContactComponent,
                HomeComponent,
                ProjectsComponent,
                AboutComponent,
                AppComponent
              ],
              providers: [],
              bootstrap: [ AppRoutingModule, AppComponent ] */
            imports: [
                BrowserModule,
                RouterModule.forRoot(routes),
                FormsModule
            ],
            declarations: [
                ContactComponent,
                HomeComponent,
                ProjectsComponent,
                AboutComponent,
                AppComponent
            ],
            bootstrap: [AppComponent]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map