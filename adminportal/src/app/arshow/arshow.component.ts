import { Component, OnInit } from '@angular/core';
import { SectiondataService } from '../sectiondata.service';
import { GenimageService } from '../genimage.service';
@Component({
  selector: 'app-arshow',
  templateUrl: './arshow.component.html',
  styleUrls: ['./arshow.component.css']
})
export class ArshowComponent implements OnInit {

  sectionList:any[];
  constructor(private gi:GenimageService,private sectiondata:SectiondataService) {
    this.sectionList=this.sectiondata.getSectionList();
    this.sectionList.unshift("");
  }
  ngOnInit(): void {
  }
  sendStr(a:any){
    let prod=this.sectiondata.getProduct(a);
    let b=prod.length;
    let st="section:"+a+" ";

    console.log(b);
    for(let i=0;i<b;i++){
      st+="name:"+prod[i].name+";"+"price"+prod[i].price+" ";
    }
    console.log(st);
    this.gi.sendCont('http://localhost:3939/genimg/'+st).subscribe(results=>console.log(results));
  }
}
