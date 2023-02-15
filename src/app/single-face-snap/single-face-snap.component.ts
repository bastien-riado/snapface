import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {

  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  @Input() snapped: boolean = false;

  constructor(private faceSnapsService: FaceSnapService, 
              private route: ActivatedRoute) {  }

  ngOnInit() {
    this.buttonText = 'Oh snaps';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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
}
