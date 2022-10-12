import { Component, OnInit, OnDestroy, OnChanges,Input} from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnDestroy, OnChanges{

 @Input() hookName : string ;
 intervalVariable = null;


  constructor() { }

 
  ngOnInit(): void {

    console.log("Oninit called");

    this.intervalVariable = setInterval(() =>{
      console.log(new Date());
    },1000)
  }

  ngOnChanges(): void {

    console.log("OnChanges called");
    
    
  }

  ngOnDestroy(): void {

    console.log("OnDestroy called");
    if (this.intervalVariable){
      clearInterval(this.intervalVariable);
    }
    
  }


}
