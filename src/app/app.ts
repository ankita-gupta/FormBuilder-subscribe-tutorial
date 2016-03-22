/**
 * Created by shivika on 2/4/16.
 */
import {View, Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { Form } from './components/form/form'

@Component({
    selector:'app',
    providers: [],
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: []
})

@RouteConfig([
    new Route({ path: '/form', component: Form, name: 'Form', useAsDefault: true})
    ])

export class App{
    constructor(){

    }
}
