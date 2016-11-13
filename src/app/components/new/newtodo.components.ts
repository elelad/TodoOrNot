/**
 * Created by Elad on 12/08/2016.
 */
import { Component } from '@angular/core';
import {Todo} from "../../services/todo";
import {NgIf, NgFor} from "@angular/common";
import {ListComponent} from "../list/list.component";
import {TodoService} from "../../services/todo.service";
import {ValidateService} from "../../services/validate.service";


@Component({
    selector: 'new-todo',
    templateUrl: './newtodo.components.html',
    styleUrls: ['newtodo.component.css'],
    providers: [ValidateService]
    /*directives: [NgIf, NgFor]*/
})
export class NewTodoComponent {
    todoService:TodoService = new TodoService();
    private validateService:ValidateService = new ValidateService();

    public addItem(todo:HTMLInputElement) {
        if (this.validateService.validateTitleNotEmpty(todo.value)){
        this.todoService.addTodoItem(todo.value);
        todo.value = "";
        }
    };

    finishedTyping($event:any) {
        console.log(typeof $event);
        if ($event.which === 13) {
            this.addItem($event.target);
        }
    }
}

