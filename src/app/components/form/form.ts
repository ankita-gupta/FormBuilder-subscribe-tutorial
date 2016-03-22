/**
 * Created by shivika on 2/4/16.
 */
import {Component} from 'angular2/core';
import { ControlGroup,FormBuilder,Validators,NgIf } from 'angular2/common';
import 'rxjs/Rx';

@Component({
    selector:'login',
    templateUrl: 'app/components/form/form.html',
    styleUrls:['app/components/form/form.css'],
    directives :[NgIf]
})
export class Form{

    public output : any;
    public output_phone : any;
    form : ControlGroup;

    constructor(private _formBuilder:FormBuilder) {
      this.form = this._formBuilder.group({
        'firstname':'Ankita',
        'lastname':'Gupta',
      });
    }
    ngAfterViewInit()
    {
      this.form.valueChanges
        .debounceTime(900)
        .delay(100)
        .distinctUntilChanged()
        .subscribe(data => {
          this.output=data;
        }
          );
    }

}
