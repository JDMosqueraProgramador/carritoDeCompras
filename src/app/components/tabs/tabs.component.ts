import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

    activateTab: number = 1;
    tabs: Object[] = [
        {
            id: 1,
            buttonTab: "Tab 1",
            content: "Esto es lo que se va a mostrar en el tab número 1"
        },
        {
            id: 2,
            buttonTab: "tab 2",
            content: "Esto es lo que se va a mostrar en el tab número 2"
        },
        {
            id: 3,
            buttonTab: "tab 3",
            content: "Esto es lo que se va a mostrar en el tab número 3"
        },
        {
            id: 4,
            buttonTab: "tab 4",
            content: "Esto es lo que se va a mostrar en el tab número 4"
        }
    ]
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
    }

    tabsFunction(id: number){
        this.activateTab = id;
    }

}
