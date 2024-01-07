import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1 : number = 0;
  num2 : number = 0;
  result : number = 0;

  calculation(operator : string){
    switch (operator){
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        if(this.num2 != 0){
          this.result = this.num1 / this.num2;
        }else{
          this.result = NaN;
        }
        break;
      default:
        this.result = NaN;
        break
    }
  }

}
