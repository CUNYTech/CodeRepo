import { Component } from '@angular/core';
import { trigger, group, state, style, animate, transition, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition(`home => dashboard,
                  home => profile,
                  home => login,
                  home => register,
                  dashboard => login,
                  dashboard => profile,
                  profile => login,
                  login => register,
                  login => dashboard,
                  register => dashboard,
                  register => profile`, [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            height: '100%',
            transform: 'translateX(100%)'
          }),
        ),
        group([
          // move page off screen right on leave
          query(':leave',
            animate('500ms ease',
              style({
                position: 'fixed',
                width:'100%',
                height: '100%',
                transform: 'translateX(-100%)'
              })
            ),
          ),
          // move page in screen from left to right
          query(':enter',
            animate('500ms ease',
              style({
                opacity: 1,
                transform: 'translateX(0%)'
              })
            ),
          ),
        ])
      ]),
      transition(`dashboard => home,
                  register => login,
                  profile => dashboard,
                  profile => home,
                  login => home,
                  register => home`, [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            height: '100%',
            transform: 'translateX(-100%)'
          }),
        ),
        group([
          // move page off screen right on leave
          query(':leave',
            animate('500ms ease',
              style({
                position: 'fixed',
                width:'100%',
                height: '100%',
                transform: 'translateX(100%)'
              })
            ),
          ),
          // move page in screen from left to right
          query(':enter',
            animate('500ms ease',
              style({
                opacity: 1,
                transform: 'translateX(0%)'
              })
            ),
          ),
        ])
      ]),
      // More transitions here
    ])
  ]
})
export class AppComponent {
  title = 'app';

  // Animation state
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData['animation'];
  }
}
