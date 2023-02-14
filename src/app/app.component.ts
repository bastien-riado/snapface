import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: "un loup",
        description: "Une espece remarquable",
        imageUrl: 'https://www.loups-chabrieres.com/sites/default/files/sylvain_deschamps_2.jpg',
        creation: new Date(),
        snaps: 0,
        location: 'Pays nordiques'
      },
      {
        title: "une loutre",
        description: "A ne pas confondre avec le loup",
        imageUrl: "http://images6.fanpop.com/image/photos/40400000/Otter-otters-40461355-2039-1287.jpg",
        creation: new Date(),
        snaps: 0,
        location: 'Riviere'
      },
      {
        title: "une louve",
        description: "attention, c'est la femelle du loup ici.{'\n'} Rien a voir avec la loutre",
        imageUrl: "https://2.bp.blogspot.com/-5fxGfC14FAI/UoPnmtYj21I/AAAAAAAAAG4/eHwhL2Iz9-s/s1600/Louve-blanche.jpg",
        creation: new Date(),
        snaps: 0
      }
    ]

    


  }
}