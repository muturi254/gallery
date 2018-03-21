import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../shared/image-service.service';


@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  constructor(private imageService: ImageServiceService) { }

  ngOnInit() {
  }

}
