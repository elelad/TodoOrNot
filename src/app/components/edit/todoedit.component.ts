/**
 * Created by Elad on 12/08/2016.
 */
import {Component, Input, OnInit, OnChanges, trigger, state, style, transition, animate} from '@angular/core';
import {Todo} from "../../services/todo";
import {NgIf, NgFor} from "@angular/common";
import {ListComponent} from "../list/list.component";
import {TodoService, TodoConst} from "../../services/todo.service";
import { FormsModule }   from '@angular/forms';
import {_switch} from "rxjs/operator/switch";
import {timeInterval} from "rxjs/operator/timeInterval";

declare var $:any;


@Component({
    selector: 'todo-edit',
    templateUrl: './todoedit.component.html',
    styleUrls: ['todoedit.component.css'],
    animations: [
        trigger("showSaved", [
            state("true", style({
                transform: 'translateX(0)'
            })),
            state("false", style({
                display: "none"
            })),
            transition('false => true', animate('3000ms')),
            transition('true => false', animate('3000ms'))
        ])
    ],
    providers: [TodoService]
    /*directives: [NgIf, NgFor, NgForm]*/
})



export class TodoEditComponent implements OnChanges{
    @Input()tTodo:Todo;
    @Input()tIndex:number;
    priority:number = 2;
    priorityTag:string;
    priorityIcons:string[] = ["priority_high","view_list", "low_priority"];
    saved:boolean = false;

    constructor(private todoService:TodoService){
    }

    ngOnChanges():void{
        this.priorityTag = this.getPriority();
        $("#datepicker").datepicker({
            orientation: "bottom",
            todayHighlight: true,
            format: "dd/mm/yy"
        });
    }

    saveTodo(title:string, date:string, details:string){
        this.todoService.updateTodo(this.tIndex, title, date, details, this.priority);
        console.log("priority: " + this.priority);
        this.saved = true;
        var context = this;
        setTimeout(function () {
            context.saved = false;
            $('#editModal').modal('hide')
        }, 1000)
    }

    setPriority(p:number){
        this.priority = p;
        this.priorityTag = TodoConst.Prioritys[p - 1];
    }

    getPriority(){
        let p:string = this.tTodo.getPriority();
        switch (this.tTodo.getPriority()) {
            case TodoConst.Prioritys[0]:
                this.priority = 1;
                break;
            case TodoConst.Prioritys[1]:
                this.priority = 2;
                break;
            case TodoConst.Prioritys[2]:
                this.priority = 3;
                break;
            default:
                this.priority = 2;
                p = TodoConst.Prioritys[1];
                break;
        }
        return p;
    }

    todoReset(){
        let oneTodo = this.todoService.getOneTodoFromStorage(this.tIndex);
        this.todoService.updateTodo(this.tIndex, oneTodo.getTodo(), oneTodo.getDate(), oneTodo.getDetails(),
            oneTodo.getPriorityNumber());
        this.setPriority(oneTodo.getPriorityNumber());
    }

    isHighPriority():boolean{
        console.log(this.tTodo.priority == "High");
        return this.priorityTag == "High";
    }
    isMediumPriority():boolean{
        return this.priorityTag == "Medium";
    }
    isLowPriority():boolean{
        return this.priorityTag == "Low";
    }

    /*tTodo:Todo;

    constructor(index){
        this.setTodo(index);
    }

    setTodo(index){
        console.log(index);
        this.tTodo = TodoService.getTodoItem(index);
        console.log(this.tTodo.todo);
    }*/
}

