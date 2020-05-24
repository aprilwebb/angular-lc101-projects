import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Complete LaunchCode prep work', 'Clean bathroom'];
   todoTitles = ["Tomorrow's Chores", "Next Year's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
