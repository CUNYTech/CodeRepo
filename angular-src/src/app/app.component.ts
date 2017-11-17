import { Component } from '@angular/core';
import { trigger, group, state, style, animate, transition, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition(`home => profile,
                  home => login,
                  home => register,
                  dashboard => login,
                  dashboard => profile,
                  search => profile,
                  profile => login,
                  login => register,
                  login => search,
                  register => search,
                  register => profile`, [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            height: '100%',
            transform: 'translateX(100%)'
          }),
          {optional:true}),
        group([
          // move page off screen left on leave
          query(':leave',
            animate('500ms ease',
              style({
                position: 'fixed',
                width:'100%',
                height: '100%',
                transform: 'translateX(-100%)'
              })
            ),
            {optional:true}),
          // move page in screen from left to right
          query(':enter',
            animate('500ms ease',
              style({
                opacity: 1,
                transform: 'translateX(0%)'
              })
            ),
            {optional:true}),
        ])
      ]),
      transition(`register => login,
                  profile => home,
                  profile => search,
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
          {optional:true}),
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
            {optional:true}),
          // move page in screen from right to left
          query(':enter',
            animate('500ms ease',
              style({
                opacity: 1,
                transform: 'translateX(0%)'
              })
            ),
            {optional:true}),
        ])
      ]),
      transition(`home => search`,
      [
      // Initial state of new route
      query(':enter',
        style({
          position: 'fixed',
          width:'100%',
          height: '100%',
          transform: 'translateY(100%)'
        }),
        {optional:true}),
      group([
      // move page off screen left on leave
      query(':leave',
      animate('500ms ease',
        style({
          position: 'fixed',
          width:'100%',
          height: '100%',
          transform: 'translateX(-100%)'
        })
      ),
      {optional:true}),
      // move page in screen up from bottom
      query(':enter',
      animate('700ms ease',
        style({
          opacity: 1,
          transform: 'translateY(0%)'
        })
      ),
      {optional:true}),
      ])
      ]),
      transition(`search => home`,
      [
      // Initial state of new route
      query(':enter',
        style({
          position: 'fixed',
          width:'100%',
          height: '100%',
          transform: 'translateX(-100%)'
        }),
        {optional:true}),
      group([
      // move page off screen down on leave
      query(':leave',
      animate('500ms ease',
        style({
          position: 'fixed',
          width:'100%',
          height: '100%',
          opacity:'0'
        })
      ),
      {optional:true}),
      // move page in screen from left to right
      query(':enter',
      animate('700ms ease',
        style({
          opacity: 1,
          transform: 'translateX(0%)'
        })
      ),
      {optional:true}),
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
