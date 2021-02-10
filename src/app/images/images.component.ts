import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  public PageNo : number;
  public total : Number = 0;
  public images :any[] = [];
  public photoDetails : any;
  public loading : boolean = false;
  constructor(private imageService :ImageService) {
    this.PageNo = 1;
  }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(PageNo = 1){
    this.loading = true; 
    this.imageService.getImages(this.PageNo).subscribe(
      (data:any)=>{
      this.loading = false;
      this.total = data.photos.pages;
      this.photoDetails = data.photos.photo;
      this.setUpView();
    },(err)=>{
      this.loading = false;
      alert("Something Went Wrong");
    });
  }

  setUpView(){
    this.images = [];
    for( let photo of this.photoDetails){
      this.images.push({
        url : `http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
        title : photo.title
      });
    }
  }

  prev(){
    this.PageNo--;
    this.loadImages(this.PageNo);
  }
  next(){
    this.PageNo++;
    this.loadImages(this.PageNo);
  }
}
