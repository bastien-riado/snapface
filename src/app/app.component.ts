import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  mySnap2!: FaceSnap;
  mySnap3!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      "un loup",
      "Une espece remarquable",
      'https://www.loups-chabrieres.com/sites/default/files/sylvain_deschamps_2.jpg',
      new Date(),
      0
    )
    this.mySnap2 = new FaceSnap(
      "une loutre",
      "A ne pas confondre avec le loup",
      "http://images6.fanpop.com/image/photos/40400000/Otter-otters-40461355-2039-1287.jpg",
      new Date(),
      0
    )
    this.mySnap3 = new FaceSnap(
      "une louve",
      "attention, c'est la femelle du loup ici.{'\n'} Rien a voir avec la loutre",
      "https://2.bp.blogspot.com/-5fxGfC14FAI/UoPnmtYj21I/AAAAAAAAAG4/eHwhL2Iz9-s/s1600/Louve-blanche.jpg",
      new Date(),
      0
    )
  }
}