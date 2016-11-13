/**
 * Created by Elad on 12/08/2016.
 */
import { Component, Input } from '@angular/core';
import {Todo} from "./services/todo";
import {NgIf, NgFor} from "@angular/common";
import {TodoService} from "./services/todo.service";




@Component({
    selector: 'my-app',
    template: '<todo-list></todo-list>',//
    //styleUrls: ['app/style.css'],
})
export class AppComponent {
    constructor(){
        //TodoService.getDataFromStorage();
    }
}

