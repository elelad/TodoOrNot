/**
 * Created by Elad on 10/10/2016.
 */


import {Injectable} from "@angular/core";


@Injectable()
export class ValidateService{
    constructor(){}


    validateAll(){
        return false;
    }

    validateTitleNotEmpty(title:string){
        if (title != ""){
            return true;
        }
        return false;
    }

}