import { Component } from '@angular/core';

@Component({
  selector: 'domain-list',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.css']
})
export class DomainListComponent {

    items = [{ name : "Alp"}, { name: "Akif"}];

    constructor(){

    }

    ngOnInit(){
        
    }
    


}
