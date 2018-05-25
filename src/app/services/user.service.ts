import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        isActive: true,
        // (mm/dd/yyyy)
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Cate',
        lastName: 'Doe',
        email: 'catedoe@yahoo.com',
        isActive: false,
        // (mm/dd/yyyy)
        registered: new Date('03/12/2017 08:30:00'),
        hide: true
      },
      {
        firstName: 'Ben',
        lastName: 'Thuita',
        email: 'benthuita@icloud.com',
        isActive: true,
        // (mm/dd/yyyy)
        registered: new Date('05/22/2016 08:30:00'),
        hide: true
      }
    ];
   }

   getData() {
     this.data = new Observable(observer => {
       setTimeout(() => {
         observer.next(1);
       }, 1000);

       setTimeout(() => {
         observer.next(2);
       }, 2000);

       setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
     });

     return this.data;
   }

   getUsers(): Observable<User[]> {
     return of(this.users);
   }

   addUser(user: User) {
    this.users.unshift(user);
   }

}
