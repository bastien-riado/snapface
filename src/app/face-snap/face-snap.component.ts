import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
/*
@Input({
  snaped: boolean = false;
})
*/
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  @Input() snaped: boolean = false;

  ngOnInit() {
    this.buttonText = 'Oh snaps';
  }

  onSnap() {
    if(this.snaped) {
      this.faceSnap.snaps--;
      this.snaped = false;
      this.buttonText = 'Oh Snaps';
    } else {
      this.faceSnap.snaps++;
      this.snaped = true;
      this.buttonText = 'UnSnaps!';
    }
    

  }
}
