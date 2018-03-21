import { Injectable } from '@angular/core';

@Injectable()
export class ImageServiceService {
  visibleImages = [];
  getImages() {
    return this.visibleImages = IMAGES;
  }
  getImage(id: number) {
    return IMAGES.splice(0).find(image => image.id === id);
  }
  constructor() { }

}
const IMAGES = [
  {'id': 1, 'category' : 'boats', 'caption' : 'hello world', 'url' : 'assets/IMG/hello.jpeg'},
  {'id': 1, 'category' : 'art', 'caption' : 'hello world', 'url' : 'assets/IMG/hello.jpeg'},
  {'id': 1, 'category' : 'boats', 'caption' : 'hello world', 'url' : 'assets/IMG/hello.jpeg'},
  {'id': 1, 'category' : 'arts', 'caption' : 'hello world', 'url' : 'assets/IMG/hello.jpeg'},
  {'id': 1, 'category' : 'boats', 'caption' : 'hello world', 'url' : 'assets/IMG/hello.jpeg'},
  {'id': 2, 'category' : 'boats', 'caption' : 'hello world', 'url' : 'assets/IMG/heli.jpg'},
  {'id': 2, 'category' : 'boats', 'caption' : 'hello world', 'url' : 'assets/IMG/heli.jpg'},
  { 'id': 1, 'category': 'boats', 'caption': 'hello world', 'url': 'assets/IMG/hello.jpeg' },
  { 'id': 1, 'category': 'boats', 'caption': 'hello world', 'url': 'assets/IMG/hello.jpeg' },
  { 'id': 1, 'category': 'boats', 'caption': 'hello world', 'url': 'assets/IMG/hello.jpeg' },
  { 'id': 1, 'category': 'boats', 'caption': 'hello world', 'url': 'assets/IMG/hello.jpeg' },
  { 'id': 1, 'category': 'boats', 'caption': 'hello world', 'url': 'assets/IMG/hello.jpeg' },
  {'id': 2, 'category' : 'boats', 'caption' : 'hello world', 'url' : 'assets/IMG/heli.jpg'},
  {'id': 2, 'category' : 'boats', 'caption' : 'hello world', 'url' : 'assets/IMG/prep.jpg'},
  {'id': 2, 'category' : 'boats', 'caption' : 'hello world', 'url' : 'assets/IMG/heli.jpg'},
  {'id': 2, 'category' : 'boats', 'caption' : 'hello world', 'url' : 'assets/IMG/heli.jpg'},
];
