import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
    selector : 'dept-list',
    template : `<h2> Department List </h2>
        <ul class="items">
            <li (click)="onDeptIdClick(dept)" [class.selected]="isSelected(dept)" *ngFor="let dept of deptList">
                <span class="badge">{{dept.id}}</span> {{dept.name}}
            </li>
        </ul>`
})

export class DepartmentListComponent implements OnInit{
    constructor(private route:Router, private actRoute:ActivatedRoute){};
    selectedId:number;

    deptList = [{id : "11", name : "dept1"},
        {id : "12", name : "dept2"},
        {id : "13", name : "dept3"},
        {id : "14", name : "dept4"}];

    ngOnInit(){
        this.actRoute.params.subscribe((params:Params) => {
            let deptId = parseInt(params['id']);
            this.selectedId = deptId;
        })
    }

    onDeptIdClick(dept:any){
        this.route.navigate(['/dept_list',dept.id]);
    }

    isSelected(dept:any){
        return this.selectedId === dept.id;

    }
}