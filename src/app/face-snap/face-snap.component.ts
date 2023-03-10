import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  @Input() snapped: boolean = false;

  constructor(private faceSnapsService: FaceSnapService,
              private router: Router) {  }

  ngOnInit() {
    this.buttonText = 'Oh snaps';
  }

  onSnap() {
    if(this.snapped) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapped = false;
      this.buttonText = 'Oh Snaps';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapped = true;
      this.buttonText = 'UnSnaps!';
    }
    

  }
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`); // `` ET NON ''
  }
}
