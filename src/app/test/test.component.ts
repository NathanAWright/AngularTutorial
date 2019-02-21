import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>Interpolation</h2>
              <div class="text-special">
              <p>Hello there player <b>{{name}}</b></p>//interpolation: the name value is processed and displayed
            </div>
            <div>
              <h1 [class]="successClass">{{"2+2="+(2+2)}}</h1>//also interpolation, one part is a string(""), one part is the actual equation
            </div>
            <input class ="text-danger" type="text" value="hello" [disabled]="isDisabled">//property binding (enabled if "isDisabled" is false)
            <p [class.text-danger]="hasDanger">This applies a class (colours text red) depending on a property value (true/false).
            \n "hasDanger" is currently set to true, so the class is applied
            </p>
            <h3 [ngClass]="messageClasses">To conditionally apply multiple classes use the ngClass directive.</h3>
            <h3>instead of: ([class.text-danger]="className") we now use: [ngClass]="objectName" (the object contains the boolean values for each class, they'll be applied if true.</h3>
            <hr>
            <div>
              <h2>Style Binding</h2>
              <h3 [style.color]="buttonClicked ? 'green' : 'red' ">This is the sentence.</h3>
              <button (click)="changeStyle()">Change Style</button>
              <b><p [style.color]="'green'">In Angular, style binding is used to apply inline styles to html elements. (Similar to class binding)</p></b>
              <p>Above this is used: [style.color]="'green'" ; style=css; color=property</p>
              <p>Or you can use this: [style.color]="condition ? result1 : result2"</p>
              <p [ngStyle]="titleStyles">The ngStyle directive can be used to apply multiple styles (just as the ngClass directive)</p>
            </div>
            <hr>            
            <h2>Event Binding</h2>
            <p>Captures a DOM event and performs an action.</p>
            <button (click)="onClick()">Greet</button>
            <p>{{greeting}}</p>//using the click event and interpolation this greeting is injected
            <p>To use the event data, pass "$event" as a parameter, this would carry all information about the DOM event that was raised.</p> //log "event" and look at properties in the log for more info
            <div>
            <hr>
              <h2>Template Reference Variables</h2>
              <p>The button logs to the console whatever data is entered in the field below.</p>
              <input #myInput type="text">
              <button (click)="logMessage(myInput.value)">Log</button>
              <p>"#variableName" is used as the reference for the input field. This "variableName" is passed to the method which is called on the button's click in order to be logged.</p>
              <p>If the reference, "#variableName" is logged instead, then we will see the html for: <code>&lt;input type="text"&gt;</code>.</p>
            </div>
              <hr>
            <div>
              <h3>Two Way Binding [()]</h3>
              <p>() --> data flow from the template to the class</p>
              <p>[] --> data flow from the class to the template.</p>
              <input [(ngModel)]="twoWayBind" type = "text">
              {{twoWayBind}}
            </div>
            <div>
            <hr>
            <h3>Structural Directives</h3>
              <h4>ngIf</h4>

              <p *ngIf="ngIfTester; else elseBlock">
                *ngIf = "someVariable" (the element, a  element in this case, will display if the condition is true.
              </p>
              
              <button (click)="toggleNgIf()"> Toggle ngIf </button>//toggles the value of the variable

              <ng-template #elseBlock>
                <p>This is the else block!</p>
              </ng-template>

              <p>The "ng-template" tag is used to contain all of the code that shows in the else block. It is referenced by "#elseBlock"</p>
              <p>
                Alternatively, the "if" can be in one ng-template block, and the else in another.
                <code><br>*ngIf="variableName; then thenBlock; else elseBlock"
                <br>The in-line syntax for the other blocks of code:<br>
                ng-template #thenBlock<br>
                ng-template #elseBlock</code>
              </p>
              <hr>
              <h4>ngSwitch</h4>
              <p>The outer div tag holds: <code>[ngSwitch]="color"</code><br> whilst the inner p tags hold: <code>*ngSwitchCase="'color'"</code></p>
              <div [ngSwitch]="color">
                <p *ngSwitchCase="'red'">You picked red</p>
                <p *ngSwitchCase="'blue'">You picked blue</p>
                <p *ngSwitchCase="'green'">You picked green</p>
                <p *ngSwitchDefault="">You did not pick a color! //*ngSwitchDefault="" was used to process the default value (nothing)</p>
              </div>
                <input type="radio" name="color" value="red" (click)="chooseColor('red')">Red<br>
                <input type="radio" name="color" value="green" (click)="chooseColor('green')">Green<br>
                <input type="radio" name="color" value="blue" (click)="chooseColor('blue')">Blue
            </div>
            <hr>
            <h4>ngFor</h4>
            <p>The *ngFor directive is used to apply a list of html elements to the DOM. For example, printing array info in a list format.</p>
            <p>Here is the syntax: <code>*ngFor="let variable of arrayName"</code> (enclosed in a tag)</p>
            <p *ngFor="let info of arrInfo">{{info}} <--here is the data from the array ("variable")</p>//of course interpolation is used to insert the variable.
            <p>The syntax: "<code>... ; index as i</code>" can be added so that we can also view the index using interpolation on the variable name "i".</p>
            <h4>Here is some additional syntax that will return true or false:</h4>
            <ul><code>
              <li>odd as o</li>
              <li>even as o</li>
              <li>first as f</li>
              <li>last as l</li></code>
            </ul>
            <p>May be coupled with *ngIf to set a class/style/add or remove elements.</p>
            <hr>
            <h3>Component Interaction</h3>
            <h4>From Parent to Child</h4>
            <p>Sometimes a child component (testComponent for eg) may want to send (@output()) or retrieve (@input()) data to/from the parent component (appComponent).
              <br>This is acheived by using the "input" and "output" decorators.'
              <br>First, the data (in this case, something saved in the .ts file for the app.component) is binded to a variable like so: [parentData]="name".
              <br><b>This is done within the tags of the <i>app-test</i> selector.</b>//this is how it is sent
              <br>The data is received by declaring a variable like so: @Input() public variableName. The variableName must be the same as the name it was binded to (ie. "parentData").
              <br>The data can now be binded to the template:
            </p>
            <h3>Here it is: {{parentData}}!</h3>//interpolation
            <p>NB. If you want to use a different property name to reference the data then the syntax is:
            <br> @Input('originalVariableName) public newVariableName;
            <br>Now the new name can be used in the interpolating process.</p>
            <h4>From Child to Parent</h4>
            <p>To send data from the child to the parent, events must be used.
              <br>Here's the syntax:
              <br>@Output public childEvent = new EventEmitter();
              <br>The event must be triggered, in this case, we use the button, which calls a method.
            </p>
            <button (click)="fireEvent()">Send Event</button>
            <p>
                  This button runs: this.childEvent.emit('Here is the message!');
                  <br>The event must now of course be captured by the parent component (app.component). Here's how:
                  <br>Within the selector tags of the child:
                  <br>(childEvent)="message=$event" //message must be declared in the app.component.ts file
                  <br>(childEvent) <-- this is the capture.
                  <br>Then the variable "$event" (the actual message), is assigned to a property named "message". 
            </p>
            <b>Be sure to include the right imports, errors would occur for wrong imports or no imports.</b>
            `,
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class TestComponent implements OnInit {
  @Input() public parentData; //this is imported from app.component
  @Output() public childEvent = new EventEmitter();
  public name ="Joe";
  public successClass = "text-success";
  public isDisabled = false
  public hasDanger=true;
  public greeting="";
  public isSpecial=true;
  public buttonClicked=false;
  public twoWayBind="";
  public ngIfTester=true;
  public color = "";
  public arrInfo = ["This","is", "the", "array", "info"];
  public messageClasses = {
    "text-success": !this.hasDanger,
    "text-danger": this.hasDanger,
    "text-special": this.isSpecial //the class text-danger (from styles) is set to this boolean
  }//this is an object assigning values to 
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }//object used to apply multiple styles using the ngStyle directive
  
  constructor() { }

  toggleNgIf(){
    this.ngIfTester=!this.ngIfTester;
  }

  changeStyle(){
    this.buttonClicked=!this.buttonClicked;
  }
  fireEvent(){
    this.childEvent.emit('Here is the message!');
  }
  logMessage(value){
    console.log(value);
    this.name=value;
  }
  chooseColor(value){
    console.log(value);
    this.color=value;
  }
  onClick(){
    console.log('Hello there!');
    this.greeting='Hello there!';
  }
  ngOnInit() {
  }

}