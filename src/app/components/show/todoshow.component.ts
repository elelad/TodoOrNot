/**
 * Created by Elad on 12/08/2016.
 */
import {Component, Input, OnInit, OnChanges, trigger, state, style, transition, animate} from '@angular/core';
import {Todo} from "../../services/todo";
import {NgIf, NgFor} from "@angular/common";
import {ListComponent} from "../list/list.component";
import {TodoService, TodoConst} from "../../services/todo.service";
import {FormsModule}   from '@angular/forms';
import {_switch} from "rxjs/operator/switch";
import {Router, ActivatedRoute, Params} from "@angular/router";


declare var $: any;


@Component({
    selector: 'todo-show',
    templateUrl: './todoshow.component.html',
    styleUrls: ['todoshow.component.css'],
    providers: [TodoService]
    /*directives: [NgIf, NgFor, NgForm]*/
})


export class TodoShowComponent implements OnChanges, OnInit {
    @Input() tTodo: Todo;
    @Input() tIndex: number;
    priority: number = 2;
    priorityTag: string;
    priorityIcons: string[] = ["priority_high", "view_list", "low_priority"];
    saved: boolean = false;
    bgClass:string;
    standAlone:boolean = false;


    constructor(private route: ActivatedRoute, private router: Router, private todoService: TodoService) {
    }

    ngOnInit() {
        if (!this.tTodo) {
            this.standAlone = true;
            this.route.params.forEach((params: Params) => {
                let id = +params['tIndex']; // (+) converts string 'id' to a number
                //this.service.getHero(id).then(hero => this.hero = hero);
                //TodoConst.todoItems[id].then(todo=> this.tTodo = todo);
                this.tIndex = id;
                this.tTodo = TodoConst.todoItems[id];
            });
        }
    }

    ngOnChanges(): void {
        this.priorityTag = this.getPriority();
    }

    getPriority() {
        let p: string = this.tTodo.getPriority();
        switch (this.tTodo.getPriority()) {
            case TodoConst.Prioritys[0]:
                this.priority = 1;
                this.bgClass = "bg-danger";
                break;
            case TodoConst.Prioritys[1]:
                this.priority = 2;
                this.bgClass = "bg-warning";
                break;
            case TodoConst.Prioritys[2]:
                this.priority = 3;
                this.bgClass = "bg-success";
                break;
            default:
                this.priority = 2;
                p = TodoConst.Prioritys[1];
                break;
        }
        return p;
    }

    isHighPriority():boolean{
        console.log(this.tTodo.priority == "High");
        return this.tTodo.priority == "High";
    }
    isMediumPriority():boolean{
        return this.tTodo.priority == "Medium";
    }
    isLowPriority():boolean{
        return this.tTodo.priority == "Low";
    }

    /*newWindow(){
     this.router.navigate(["/todo", this.tIndex]);
     }*/

}

