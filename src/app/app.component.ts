import { Component } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wedding';
  isLoading = false;

  srcAudio = [
    {
      src: "src/assets/mp3/ILoveYou3000-StephaniePoetri.mp3"
    },
    {
      src: "/src/assets/mp3/ILoveYou3000-StephaniePoetri.mp3"
    },
    {
      src: "./src/assets/mp3/ILoveYou3000-StephaniePoetri.mp3"
    },
    {
      src: "./assets/mp3/ILoveYou3000-StephaniePoetri.mp3"
    },
    {
      src: "/assets/mp3/ILoveYou3000-StephaniePoetri.mp3"
    },
    {
      src: "assets/mp3/ILoveYou3000-StephaniePoetri.mp3"
    },
  ];

  images: GalleryItem[] = [];

  constructor(
    public gallery: Gallery,
    private lightbox: Lightbox) { }

  ngOnInit(): void {
    // this.isLoading = true;
    // this.playAudio();

    this.images = this.items.map(item => new ImageItem({ src: item.src, thumb: item.thumb }));

    this.basicLightbox();

    this.withCustomGalleryConfig();
  }

  basicLightbox() {
    this.gallery.ref().load(this.images);
  }

  withCustomGalleryConfig() {
    const lightboxGalleryRef = this.gallery.ref('anotherLightbox');

    lightboxGalleryRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Bottom
    });

    lightboxGalleryRef.load(this.images);
  }

  playAudio() {

    // let audio = new Audio();
    // audio.src = "https://play.imusicvn.com/stream/TRhJwI6gfaMM";
    // audio.load();
    // audio.play();
    // console.log('audio', audio);
    this.isLoading = false;
  }

  items: any[] = [
    {
      src: 'https://raw.githubusercontent.com/gunht/img/master/wedding/weeding_(1).jpg',
      thumb: 'https://raw.githubusercontent.com/gunht/img/master/wedding/weeding_(1).jpg'
    },
    // {
    //   src: 'https://raw.githubusercontent.com/gunht/img/master/wedding/weeding_(2).jpg',
    //   thumb: 'https://raw.githubusercontent.com/gunht/img/master/wedding/weeding_(2).jpg'
    // },
    // {
    //   src: 'https://raw.githubusercontent.com/gunht/img/master/wedding/weeding_(3).jpg',
    //   thumb: 'https://raw.githubusercontent.com/gunht/img/master/wedding/weeding_(3).jpg'
    // },
    {
      src: 'https://raw.githubusercontent.com/gunht/img/master/wedding/weeding_(11).JPG',
      thumb: 'https://raw.githubusercontent.com/gunht/img/master/wedding/weeding_(11).JPG'
    },
    {
      src: 'https://raw.githubusercontent.com/gunht/img/master/wedding/weeding_(18).jpg',
      thumb: 'https://raw.githubusercontent.com/gunht/img/master/wedding/weeding_(18).jpg'
    },
    // {
    //   src: 'https://raw.githubusercontent.com/gunht/img/master/wedding/weeding_(21).JPG',
    //   thumb: 'https://raw.githubusercontent.com/gunht/img/master/wedding/weeding_(21).JPG'
    // },
    {
      src: 'https://raw.githubusercontent.com/gunht/img/master/wedding/weeding_(22).JPG',
      thumb: 'https://raw.githubusercontent.com/gunht/img/master/wedding/weeding_(22).JPG'
    },
    {
      src: 'https://raw.githubusercontent.com/gunht/img/master/wedding/weeding_(24).JPG',
      thumb: 'https://raw.githubusercontent.com/gunht/img/master/wedding/weeding_(24).JPG'
    },
  ];
}
