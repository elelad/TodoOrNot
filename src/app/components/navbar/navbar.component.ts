/**
 * Created by Elad on 12/08/2016.
 */
import { Component, Input } from '@angular/core';
import {Todo} from "../../services/todo";
import {NgIf, NgFor} from "@angular/common";
import {TodoService} from "../../services/todo.service";





@Component({
    selector: 'my-app',
    templateUrl: './navbar.component.html',
    styleUrls: ['navbar.component.css'],
})
export class NavBarComponent {
    todoService:TodoService = new TodoService();

    constructor(){
        this.todoService.getDataFromStorage();
    }
}

