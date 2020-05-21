import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public selectedFile: File = null;
  /**
   * By default, url variable contains dummy image link
   * when user select the image it will also contain in particular index
   */
  public urls: any[] = [
    'http://us.yuneec.com/c.4198727/sca-dev-vinson/img/no_image_available.jpeg',
    'http://us.yuneec.com/c.4198727/sca-dev-vinson/img/no_image_available.jpeg',
    'http://us.yuneec.com/c.4198727/sca-dev-vinson/img/no_image_available.jpeg',
    'http://us.yuneec.com/c.4198727/sca-dev-vinson/img/no_image_available.jpeg', // 3
    'http://us.yuneec.com/c.4198727/sca-dev-vinson/img/no_image_available.jpeg',
    'http://us.yuneec.com/c.4198727/sca-dev-vinson/img/no_image_available.jpeg',
  ];

  constructor() {}

  // upload image
  public onFileChanged(event, index) { // 3
    this.selectedFile = <File>event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        for (let i = 0; i < this.urls.length; i++) {
          if (this.urls[index].length > 74) {
            this.urls[index] = event.target.result;
          } else if(this.urls[i].length < 74) {
            this.urls[i] = event.target.result;
            break;
          }
        }
      };
    }
  }

  // remove image
  public onRemoveImg(index) {
    for (let i = index; i < this.urls.length; i++) {
      this.urls[i] = this.urls[i + 1];
      this.urls[5] =
        'http://us.yuneec.com/c.4198727/sca-dev-vinson/img/no_image_available.jpeg';
    }
    // this.urls[index] =
    //   'http://us.yuneec.com/c.4198727/sca-dev-vinson/img/no_image_available.jpeg';
    // this.urls.sort((firstVal, secondVal) => {
    //   var a = firstVal.length;
    //   var b = secondVal.length;
    //   var compare = 0;

    //   if (a < b) {
    //     return (compare = 1);
    //   } else if (a > b) {
    //     return (compare = -1);
    //   } else {
    //     return (compare = 0);
    //   }
    // });
  }
}
