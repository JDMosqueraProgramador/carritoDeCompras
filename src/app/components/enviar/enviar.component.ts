import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
    selector: 'app-enviar',
    templateUrl: './enviar.component.html',
    styleUrls: ['./enviar.component.scss']
})
export class EnviarComponent implements OnInit {

    name: any;
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // this.route.queryParams.subscribe(params =>{
        //     this.name = params["name"];
        // })

    }

}
