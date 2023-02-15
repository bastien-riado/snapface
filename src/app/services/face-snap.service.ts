import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: "un loup",
      description: "Une espece remarquable",
      imageUrl: 'https://www.loups-chabrieres.com/sites/default/files/sylvain_deschamps_2.jpg',
      creation: new Date(),
      snaps: 0,
      location: 'Pays nordiques'
    },
    {
      id: 2,
      title: "une loutre",
      description: "A ne pas confondre avec le loup",
      imageUrl: "http://images6.fanpop.com/image/photos/40400000/Otter-otters-40461355-2039-1287.jpg",
      creation: new Date(),
      snaps: 0,
      location: 'Riviere'
    },
    {
      id: 3,
      title: "une louve",
      description: "attention, c'est la femelle du loup ici. Rien a voir avec la loutre",
      imageUrl: "https://2.bp.blogspot.com/-5fxGfC14FAI/UoPnmtYj21I/AAAAAAAAAG4/eHwhL2Iz9-s/s1600/Louve-blanche.jpg",
      creation: new Date(),
      snaps: 0
    }
  ]

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps
  }

  getFaceSnapById(id: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    if(!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }
  snapFaceSnapById(id: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(id);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}