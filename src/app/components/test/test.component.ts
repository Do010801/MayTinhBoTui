import { Component, Input, OnInit } from '@angular/core';
import { CalculationService } from 'src/app/components/services/calculation.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  inputData: string = '';
  constructor(private calcService: CalculationService) {}

  ngOnInit(): void {
    this.calcService.listenCurrentValue((value) => {
      this.inputData = value.toString();
    });
  }
  onClick(input: string) {
    let temp = parseFloat(input);
    if (isNaN(temp)) {
      this.calcService.currentOperator = input;
      console.log(input);
      this.calcService.previousValue = this.calcService.currentValue;
      this.calcService.setCurrentValue(0);
    } else {
      console.log(this.calcService.currentValue, temp);
      this.calcService.setCurrentValue(
        parseFloat(`${this.calcService.currentValue}${temp}`)
      );
    }
    
  }
  reset() {
    this.calcService.reset();
  }
  calculate() {
    let result = this.calcService.calculate(
      this.calcService.previousValue,
      this.calcService.currentValue,
      this.calcService.currentOperator
    );
    this.calcService.reset();
    this.calcService.setCurrentValue(result);
  }
}
