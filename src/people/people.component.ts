import {Component, OnInit} from '@angular/core';
@Component({
selector:'app-people',
templateUrl:'./people.component.html',
styleUrls:['./people.component.css']

})

export class PeopleComponent implements OnInit{
people=[];
constructor(){}

ngOnInit(){
this.people=[
{
name:'Neha Pradhan',
status:'currently coding',
website:{
url:'https//juristr.com',
name:'juristr.com'
        },
twitter:{
url:'https://twitter.com/juristr',
name:'@juristr'
         }
}
];
console.log('djahjfhaskjfh')
        }
