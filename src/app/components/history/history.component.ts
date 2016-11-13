/**
 * Created by Elad on 12/08/2016.
 */
import { Component } from '@angular/core';
import {Todo} from "../../services/todo";
import {NgIf, NgFor} from "@angular/common";
import {ListComponent} from "../list/list.component";
import {TodoService, TodoConst} from "../../services/todo.service";


@Component({
    selector: 'history-list',
    templateUrl: './history.component.html',
    styleUrls: ['history.component.css'],
    providers: [TodoService],
    /*directives: [NgIf, NgFor]*/
})
export class HistoryComponent {
    todoService:TodoService = new TodoService();
   items:Todo[] = this.todoService.getTodoHistoryItems();
    constructor(){

    }

    undo(hIndex:number){
        this.todoService.restoreFromHistory(hIndex);
        //this.items.slice(hIndex, 1);
    }

    deleteForever(index:number){
        this.todoService.removeHistoryItem(index);
    }

    historyEmpty(){
        if (this.items.length == 0){
            return true;
        }
        return false;
    }

}

