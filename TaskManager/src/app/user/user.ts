import { Component,Input,Output,input,computed,EventEmitter,output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { UserVal } from './user.model';
import { Card } from "../shared/card/card";
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  // imports: [Card],
  standalone:false,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
//   @Input ({required:true}) id !:string;
// @Input({required:true}) avatar!: string;
// @Input({required:true}) name!: string; //make the daat entry to be required true
// avatar = input.required<string>();
// name=input.required<string>();
// imagePath = computed(() =>{
//   return 'assets/users/' + this.avatar();
// }
// )
 @Input({required:true}) user !:UserVal;
@Output() select = new EventEmitter();
@Input({required:true}) selected!: boolean;
// select = output<string>(); 
get imagePath(){
  return 'assets/users/' + this.user.avatar;
}

onSelectUser(){
this.select.emit(this.user.id);

}
}



























// import { Component ,signal,computed } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.html',
//   styleUrl: './user.css'
// })
// export class User {
// // selectedUser = DUMMY_USERS[randomIndex];
// // with signals
// selectedUser = signal(DUMMY_USERS[randomIndex]);

// // // using the getter to get the data from dummy users
// // get imagePath(){
// //   return 'assets/users/' + this.selectedUser.avatar
// // }

// imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
// onSelectUser(){
//   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// //  this.selectedUser = DUMMY_USERS[randomIndex];
// this.selectedUser.set(DUMMY_USERS[randomIndex]);
// }
// }
