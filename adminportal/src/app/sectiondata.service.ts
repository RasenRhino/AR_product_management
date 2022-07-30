import { Injectable } from '@angular/core';
interface prod{
  name:string;
  price:any;
};
@Injectable({
  providedIn: 'root'
})
export class SectiondataService {
  sectionList!:any[];
  fullSection!:any; 
  constructor() { 
    this.fullSection=new Map();
    this.sectionList=[];
  }
  public newSection(name:string,products:any[]){
    this.fullSection.set(name,products);
    // this.fullSection[name]=products;
    this.sectionList?.push(name);
    // console.log(this.sectionList);
  }
  public getSectionList(){
    return this.sectionList;
  }
  public getProduct(section:string){
    return this.fullSection.get(section);
  }
  public updateProduct(name:string,products:any[]){
    this.fullSection.set(name,products);
  }
  // public updateSection(name:string,products:any[]){

  // }
}
