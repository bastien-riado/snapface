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
  @Input() snapped: boolean = false;

  ngOnInit() {
    this.buttonText = 'Oh snaps';
  }

  onSnap() {
    if(this.snapped) {
      this.faceSnap.snaps--;
      this.snapped = false;
      this.buttonText = 'Oh Snaps';
    } else {
      this.faceSnap.snaps++;
      this.snapped = true;
      this.buttonText = 'UnSnaps!';
    }
    

  }
}
