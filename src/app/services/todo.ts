import {TodoConst} from "./todo.service";
/**
 * Created by Elad on 05/10/2016.
 */


export class Todo {
    todo:string;
    date:string;
    private done:boolean;
    priority:string;
    details:string;

    constructor(todo:string) {
        this.todo = todo;
        this.done = false;
        this.priority = TodoConst.Prioritys[1];
    }

    //----Getters
    getTodo(){
        return this.todo;
    }
    getDate(){
        return this.date;
    }
    getDone(){
        return this.done;
    }
    getPriority(){
        return this.priority;
    }
    getPriorityNumber(){
        let pNumber = 0;
        switch (this.getPriority()) {
            case TodoConst.Prioritys[0]:
                pNumber = 1;
                break;
            case TodoConst.Prioritys[1]:
                pNumber = 2;
                break;
            case TodoConst.Prioritys[2]:
                pNumber = 3;
                break;
        }
        return pNumber;
    }
    getDetails(){
        return this.details;
    }

    //----Setters
    setTodo(title:string){
        this.todo = title;
    }
    setDate(date:string){
        this.date = date;
    }
    setDone(done:boolean){
        this.done = done;
    }
    setPriority(priority:number){
        this.priority = TodoConst.Prioritys[priority - 1];
    }
    setDetails(details:string){
        this.details = details;
    }
    setAll(title:string, date:string, done:boolean, priority:string, details:string){
        this.todo = title;
        this.date = date;
        this.done = done;
        this.priority = priority;
        this.details = details;
    }
}
