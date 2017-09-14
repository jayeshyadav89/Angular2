import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
    template : `You have selected department : {{departmentId}}<br/>
        <a (click)="goPrevious()">Previous</a>    
        <a (click)="goNext()">Next</a>
        <p>
            <button (click)="gotoDepartment()">Back</button>
        </p>`
})

export class DepartmentDetailsComponent implements OnInit{
    departmentId:number;
    constructor(private routes:ActivatedRoute, private router:Router){};

    ngOnInit(){
        this.routes.params.subscribe((params:Params) => {
            this.departmentId = parseInt(params['id']);
        })
    }

    goPrevious(){
        let prev_dept_id = this.departmentId - 1;
        this.router.navigate(['dept_list', prev_dept_id]);
    }

    goNext(){
        let next_dept_id = this.departmentId + 1;
        this.router.navigate(['dept_list', next_dept_id]);
    }

    gotoDepartment(){
        this.router.navigate(['/dept_list', {id:this.departmentId}]);
    }
}