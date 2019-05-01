import { Component, OnInit ,  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-open-camera',
  templateUrl: './open-camera.component.html',
  styleUrls: ['./open-camera.component.css']
})
export class OpenCameraComponent implements OnInit {

  
  @ViewChild("video")
    public video: ElementRef;

    @ViewChild("canvas")
    public canvas: ElementRef;

    public captures: Array<any>;

    public constructor() {
        this.captures = [];
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                this.video.nativeElement.srcObject = stream;
                this.video.nativeElement.play();
            });
        }
    }

    public capture() {
        var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
        this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    }
    public save(){
      
    }


}
