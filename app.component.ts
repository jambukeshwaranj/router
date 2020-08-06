import { Component } from '@angular/core';
import { todo } from './todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login1';
  date=new Date();
  todovalue:string;
  list:todo[];
  ngOnInit()
    {
      this.list=[];
      this.todovalue='';
    }
    addvalue()
    {
      if (this.todovalue!='')
    {
      const newItem:todo={
        id:Date.now(),
        value:this.todovalue,
        isDone:false
      }
      this.list.push(newItem)
    }
    this.todovalue='';
  }
  deleteItem(id:number){
    this.list=this.list.filter(item => item.id!==id);
  }
}






