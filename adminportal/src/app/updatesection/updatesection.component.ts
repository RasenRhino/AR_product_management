import { Component, OnInit } from '@angular/core';
import { SectiondataService } from '../sectiondata.service';
@Component({
  selector: 'app-updatesection',
  templateUrl: './updatesection.component.html',
  styleUrls: ['./updatesection.component.css']
})
export class UpdatesectionComponent implements OnInit {

  constructor(private sectiondata:SectiondataService) { }
  sectionList:any;
  productList!:any[];
  selected!:string;
  ngOnInit(): void {
    this.sectionList=this.sectiondata.getSectionList();
    this.sectionList.unshift("");
  }
  changesec(section:any){
    this.productList=this.sectiondata.getProduct(section);
    this.selected=section;
  }
  update(){
    this.sectiondata.updateProduct(this.selected,this.productList);
  }

}
