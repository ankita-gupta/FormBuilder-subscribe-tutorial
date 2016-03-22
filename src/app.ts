/**
 * Created by shivika on 2/5/16.
 */
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import { App } from './app/app';

bootstrap( App, [HTTP_PROVIDERS, ROUTER_PROVIDERS])
    .catch(err => console.error(err));
