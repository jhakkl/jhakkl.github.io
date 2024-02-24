import { Component } from '@angular/core';
import {fetchData} from "./mainApi";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'TopLetter';
  topLetter: string = "Loading...";
  name:string = "Loading...";
  turn: number = 1;
  squares: number[] = [0,0,0,0,0,0,0,0,0];

  async ngOnInit(): Promise<void> {
    const firebaseConfig = {
      apiKey: "AIzaSyDv1F_QS4gtp0OBtPHrE32AwBp1LC5f8lA",
      authDomain: "topletter-jhak.firebaseapp.com",
      projectId: "topletter-jhak",
      storageBucket: "topletter-jhak.appspot.com",
      messagingSenderId: "932339119568",
      appId: "1:932339119568:web:28416ad7e3fccc7c46f5d5",
      measurementId: "G-X48WT47GD4"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);


    let q: string[] = await fetchData(db);
    console.log(q[0]);
    this.name = q[0];
    this.topLetter = q[1];


  }



  fix(inVar: string): string {
    return "\"" + inVar + "\"";
  }





  clickedSquare(square: number){
    var q: boolean = true;
    const squarecurr = HTMLElement = document.getElementById(square.toString())
    if(this.squares[square-1] == 0){
      if(squarecurr != null){
        squarecurr.style.backgroundColor = this.turn == 1 ? 'green' : 'red';
      } else {
        this.clickedSquare(square)
        q = false
      }
    } else {
      this.clickedSquare(square);
      q = false
    }

    console.log(this.turn.toString() + ": " + this.winCheck(this.turn) ? "Win!" : "No one has one yet!");




    if(q){
      this.squares[square-1] = this.turn;
      this.turn = (this.turn == 1) ? 2 : 1;
    }

    console.log(this.squares.toString())








  }

  winCheck(numin: number): boolean {
    const nums: number[] = this.squares;
    const cons: boolean[] = [nums[2] === numin, nums[4] === numin, nums[6] === numin];

    if (cons[1]) {
      if (cons[2] && cons[0]) {
        return true;
      }
      if (nums[1] === numin && nums[7] === numin) {
        return true;
      }
      if (nums[0] === numin && nums[8] === numin) {
        return true;
      }
      if (nums[3] === numin && nums[5] === numin) {
        return true;
      }
    }

    if (cons[0]) {
      if (nums[0] === numin && nums[3] === numin) {
        return true;
      }
      if (nums[8] === numin && nums[7] === numin) {
        return true;
      }
    }

    if (cons[2]) {
      if (nums[2] === numin && nums[5] === numin) {
        return true;
      }
      if (nums[0] === numin && nums[6] === numin) {
        return true;
      }
    }

    return false;
  }





}
