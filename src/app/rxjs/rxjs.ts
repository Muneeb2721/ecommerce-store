import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of, timeout } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  imports: [CommonModule],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css'
})

export class Rxjs implements OnInit{
  agents: Observable<string> = new Observable<string>;
  agentName: string = '';

  studentList = ['Mask', 'Ram', 'Rom'];
  // students: Observable<string> = of(this.studentList);
  
  constructor() {}

  ngOnInit(): void {
    this.agents = new Observable(
      function(data) {
        try{
          data.next('Agent Smith');
          setTimeout(() => {
            data.next('Agent Johnson');
          }, 3000);

          setTimeout(() => {
            data.next('Agent Brown');
          }, 6000);
            
        }
        catch(e){
          data.error(e);
        }
      }
    );
    
    this.agents.subscribe(data => {
      this.agentName = data;
    });

    // this.students.subscribe(data => {
    //   console.log(data);
    // })
  
  }
}