/**
 * Created by Elad on 12/08/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ListComponent} from "./components/list/list.component";
import {NewTodoComponent} from "./components/new/newtodo.components";
import {TodoService} from "./services/todo.service";
import {TodoEditComponent} from "./components/edit/todoedit.component";
import {FormsModule} from "@angular/forms";
import { RouterModule }   from '@angular/router';
import {HistoryComponent} from "./components/history/history.component";
import {NavBarComponent} from "./components/navbar/navbar.component";
import {ValidateService} from "./services/validate.service";
import {TodoShowComponent} from "./components/show/todoshow.component";


import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/tether/dist/js/tether.js';
import '../../node_modules/bootstrap-datepicker-master/dist/css/bootstrap-datepicker.css';
import '../../node_modules/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.js';
//import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../public/css/style.css';


@NgModule({
    imports:      [ BrowserModule, FormsModule,
        RouterModule.forRoot([
            { path: 'history', component: HistoryComponent },
            { path: 'home', component: ListComponent },
            { path: 'todo/:tIndex', component: TodoShowComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full'},
            { path: '**', redirectTo: '/home', pathMatch: 'full' }])
    ],
    providers: [TodoService, ValidateService],
    declarations: [ AppComponent, ListComponent, NewTodoComponent, TodoEditComponent ,HistoryComponent
        , NavBarComponent, TodoShowComponent],
    bootstrap:    [ NavBarComponent ]
})
export class AppModule { }

