import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
// import { Data, AppService } from '../../../app.service';
// import { Product } from "../../../app.models";
// import { emailValidator } from '../../../theme/utils/app-validators';
import { ProdZoomComponent } from './prod-zoom/prod-zoom.component';
import * as io from 'socket.io-client';
import {WebsocketService} from '../../websocket.service'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @ViewChild('zoomViewer', { static: true }) zoomViewer;
  @ViewChild(SwiperDirective, { static: true }) directiveRef: SwiperDirective;
  public config: SwiperConfigInterface={};
  // public product: Product;
  title='as7834';
  searchText;
  page=1;
  con=false;
  content=[
    {
    price:2000,
    owner:'aaa',
    objectID :1,
    title :'abccc',
    image:'assets/images/products/phone/1-big.png'
    },
    {
      price:2000,
      owner:'bbb',
      objectID :1,

      title :'abccc',
      image:'assets/images/products/headset/1-big.png'
      },
      {
        price:2000,
        owner:'ccc',
        objectID :1,
        title :'abccc',
        image:'assets/images/products/keyboard/1-big.png'
        },
        {
          price:2000,
          owner:'ddd',
          objectID :1,
          title :'abccc',
          image:'assets/images/products/pc/1-big.png'
          },

    {
    price:2000,
    owner:'eee',
    objectID :2,
    title :'abccc',
    image:'assets/images/products/keyboard/1-big.png'
    },
  ]
  public image: any;
  public zoomImage: any;
  private sub: any;
  element= new Array();
  socket;
  public form: FormGroup;
  socketNames = {
    sendReqData : 'sendReqData',
    giveDataToSeller: 'giveDataToSeller-'
}
  // public relatedProducts: Array<Product>;

  constructor( private activatedRoute: ActivatedRoute, public dialog: MatDialog, public formBuilder: FormBuilder, private web:WebsocketService) { 
    this.socket = io.connect('http://localhost:3000/');
   }

  ngOnInit() {
    
    this.sub = this.activatedRoute.params.subscribe(params => { 
      // this.getProductById(params['id']); 
    }); 
    this.form = this.formBuilder.group({ 
      'review': [null, Validators.required],            
      'name': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      // 'email': [null, Validators.compose([Validators.required, emailValidator])]
    });
    // this.submitt(this.title); 
    // this.getRelatedProducts();    
  }


  submitt(title){
    alert("in submit function...");
    alert(title);
    this.socket.emit(this.socketNames.sendReqData,title);
    // alert("socket ");
    this.socket.on(this.socketNames.giveDataToSeller + title,(data)=>{
      // alert("sockt emit code..");
      data.forEach(element => {
        this.element.push(element);
      });
      
      console.log(this.element);
  })
  }
  searchh(a:Event)
  {
    const filterValue = (a.target as HTMLInputElement).value;
    this.element.filter = filterValue.trim().toLowerCase();
  }
  
  
  ngAfterViewInit(){
    this.config = {
      observer: false,
      slidesPerView: 4,
      spaceBetween: 10,      
      keyboard: true,
      navigation: true,
      pagination: false,       
      loop: false, 
      preloadImages: false,
      lazy: true, 
      breakpoints: {
        480: {
          slidesPerView: 2
        },
        600: {
          slidesPerView: 3,
        }
      }
    }
  }

  // public getProductById(id){
  //   // this.appService.getProductById(id).subscribe(data=>{
  //   //   this.product = data;
  //     // this.image = data.images[0].medium;
  //     // this.zoomImage = data.images[0].big;
  //     setTimeout(() => { 
  //       this.config.observer = true;
  //      // this.directiveRef.setIndex(0);
  //     });
  //   });
  // }

  // public getRelatedProducts(){
  //   this.appService.getProducts('related').subscribe(data => {
  //     this.relatedProducts = data;
  //   })
  // }

  public selectImage(image){
    this.image = image.medium;
    this.zoomImage = image.big;
  }

  // public increaseValue() {
  //   var value = parseInt(document.getElementById('number').value, 10);
  //   value = isNaN(value) ? 0 : value;
  //   value++;
  //   document.getElementById('number').value = value;
  // }
  public onMouseMove(e){
    if(window.innerWidth >= 1280){
      var image, offsetX, offsetY, x, y, zoomer;
      image = e.currentTarget; 
      offsetX = e.offsetX;
      offsetY = e.offsetY;
      x = offsetX/image.offsetWidth*100;
      y = offsetY/image.offsetHeight*100;
      zoomer = this.zoomViewer.nativeElement.children[0];
      if(zoomer){
        zoomer.style.backgroundPosition = x + '% ' + y + '%';
        zoomer.style.display = "block";
        zoomer.style.height = image.height + 'px';
        zoomer.style.width = image.width + 'px';
      }
    }
  }

  public onMouseLeave(event){
    this.zoomViewer.nativeElement.children[0].style.display = "none";
  }

  public openZoomViewer(){
    this.dialog.open(ProdZoomComponent, {
      data: this.zoomImage,
      panelClass: 'zoom-dialog'
    });
  }

  

//   ngOnDestroy() {
//     this.sub.unsubscribe();
//   } 

//   public onSubmit(values:Object):void {
//     if (this.form.valid) {
//       //email sent
//     }
//   }
}