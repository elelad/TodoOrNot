/**
 * Created by Elad on 12/08/2016.
 */
import { Component } from '@angular/core';
import {Todo} from "../../services/todo";
import {NgIf, NgFor} from "@angular/common";
import {TodoConst, TodoService} from "../../services/todo.service";
import {TodoEditComponent} from "../edit/todoedit.component";
import {Router} from "@angular/router";


@Component({
    selector: 'todo-list',
    templateUrl: './list.component.html',
    styleUrls: ['list.component.css'],
    providers: [TodoService]
    /*directives: [NgIf, NgFor]*/
})
export class ListComponent {
    title:string = "Todo List";
    todoEditComponent:TodoEditComponent;
    selectesdTodo:Todo;
    items:Todo[] = this.todoService.getAllTodoItems();
    todoIndex:number;
    constructor(private router:Router, private todoService:TodoService){
    }

    /*addItem(todo:HTMLInputElement) {
        this.todoService.addTodoItem(todo.value);
        todo.value = "";
    }*/
    remove(index:number) {
        let selectedIndex:number = this.items.indexOf(this.selectesdTodo);
        if (index == selectedIndex){
            this.closeEdit();
        }
        this.todoService.removeTodoItem(index);
    }

    markAsDone(item:Todo){
        (item.getDone()) ? item.setDone(false) : item.setDone(true);
        this.todoService.updateStorage();
    }

    setTodoToEdit(index:number){
        console.log(index);
        //let temp:number = index;
        //this.todoEditComponent = new TodoEditComponent(index);
        this.todoIndex = index;
        this.selectesdTodo = this.todoService.getTodoItem(index);
    }

    closeEdit(){
        delete this.selectesdTodo;
    }

    newWindow(index:number){
        console.log(index.toString());
        this.router.navigate(["/todo", index.toString()]);
    }

    doBlur($event:any){
        var target = $event.target;
        // do more here, like blur or other things
        target.blur();
    }
}

