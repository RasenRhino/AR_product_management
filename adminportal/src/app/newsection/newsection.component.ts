import { Component, OnInit } from '@angular/core';
import { SectiondataService } from '../sectiondata.service';
@Component({
  selector: 'app-newsection',
  templateUrl: './newsection.component.html',
  styleUrls: ['./newsection.component.css']
})
export class NewsectionComponent implements OnInit {
  sectionName!:string;
  productName!:string;
  productPrice!:number;
  products:any[];
  constructor(private sectiondata:SectiondataService) { 
    this.products=[];
  }

  ngOnInit(): void {
  }
  addproduct(){
    let a={name:this.productName,price:this.productPrice};
    this.products.push(a);
    this.productName='';

  }
  newsection(){
    this.sectiondata.newSection(this.sectionName,this.products);
    this.products=[];
    this.sectionName='';
  }
}
