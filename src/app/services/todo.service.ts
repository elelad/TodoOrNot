/**
 * Created by Elad on 05/10/2016.
 */



import {Todo} from "./todo";
import {Injectable, OnInit} from "@angular/core";


export class TodoConst{
    static todoItems:Todo[] = [];
    static todoHistoryItems:Todo[] = [];
    static tTodo:Todo;
    static Prioritys:string[] = ["High", "Medium", "Low"];


}

@Injectable()
export class TodoService{
    getDataFromStorage(){
        if (localStorage.getItem("ToDoData")){
            let tempItems:any[] = JSON.parse(localStorage.getItem("ToDoData"));
            console.log(tempItems);
            tempItems.forEach((lItem, lIndex) =>{
                TodoConst.todoItems.push(new Todo(lItem.todo));
                TodoConst.todoItems[lIndex].setAll(lItem.todo, lItem.date, lItem.done, lItem.priority, lItem.details);
            });
        }else {
            TodoConst.todoItems = [new Todo("Add your first Todo")];
        }
        if (localStorage.getItem("ToDoHistoryData")){
            let tempItems:any[] = JSON.parse(localStorage.getItem("ToDoHistoryData"));
            console.log(tempItems);
            tempItems.forEach((lItem, lIndex) =>{
                TodoConst.todoHistoryItems.push(new Todo(lItem.todo));
                TodoConst.todoHistoryItems[lIndex].setAll(lItem.todo, lItem.date, lItem.done, lItem.priority, lItem.details);
            });
        }
    }

    getOneTodoFromStorage(index:number){
        if (localStorage.getItem("ToDoData")){
            let tempItems:any[] = JSON.parse(localStorage.getItem("ToDoData"));
            console.log(tempItems);
            let oneTodo =  new Todo(tempItems[index].todo);
            oneTodo.setAll(tempItems[index].todo, tempItems[index].date, tempItems[index].done,
                tempItems[index].priority, tempItems[index].details);
            return oneTodo;
        }
    }

    getAllTodoItems(){
        return TodoConst.todoItems;
    }

    getTodoHistoryItems(){
        return TodoConst.todoHistoryItems;
    }

    getTodoItem(index:number){
        return TodoConst.todoItems[index];
    }

    addTodoItem(todo:string){
        TodoConst.todoItems.push(new Todo(todo));
        this.updateStorage();
    }

    removeTodoItem(index:number){
        TodoConst.todoHistoryItems.push(TodoConst.todoItems[index]);
        TodoConst.todoItems.splice(index, 1);
        this.updateStorage();
    }

    updateTodo(index:number, title:string, date:string, details:string, priority:number){
        TodoConst.todoItems[index].setTodo(title);
        TodoConst.todoItems[index].setDate(date);
        TodoConst.todoItems[index].setDetails(details);
        TodoConst.todoItems[index].setPriority(priority);
        this.updateStorage();
    }

    restoreFromHistory(index:number){
        TodoConst.todoItems.push(TodoConst.todoHistoryItems[index]);
        TodoConst.todoHistoryItems.splice(index, 1);
        this.updateStorage();
    }

    removeHistoryItem(index:number){
        TodoConst.todoHistoryItems.splice(index, 1);
        this.updateStorage();
    }

    updateStorage(){
        localStorage.setItem("ToDoData", JSON.stringify(TodoConst.todoItems));
        localStorage.setItem("ToDoHistoryData", JSON.stringify(TodoConst.todoHistoryItems));
    }
}

