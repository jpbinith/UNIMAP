import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  isCard : boolean;
  isTrue : boolean = true;

  constructor(private router: Router) {
    
   }


  ngOnInit() {
  }

  public onclick(){
    this.isCard = true;
    this.isTrue = false;
    console.log("true");
  }

  public onSubmit() {
    
    this.router.navigate(['/homepage']);
    
  }

}
