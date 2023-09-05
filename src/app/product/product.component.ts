import { Component, OnInit } from '@angular/core';
import { CapstoneserviceService } from '../capstoneservice.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private capservice:CapstoneserviceService){}
  ngOnInit(): void {
    this.GetProductList();
  }
  ProductList:any=[];
imageUrl:string=this.capservice.imageUrl;
fileData:any = null;
profile?:string;
GetProductList(){
  this.capservice.getProductList().subscribe(data=>{
    this.ProductList = data;
    console.log(data);
  });
}

onEdit(id:any){

}

onDelete(id:any){
  let request = confirm("Are you sure want to delete a record?");
  if(request){
    this.capservice.deleteProduct(id).subscribe(response=>{
      if(response){
        alert("Record deleted");
        this.GetProductList();
      }
      else{
        alert("Some internal error occured");
      }

    })
  }

}
onSave()
{
const formData = new FormData();
formData.append('Id','0');
formData.append('Name','Joy');
formData.append('Qty','10');
formData.append('Rate','11');
formData.append('Profile','default.jpg');
formData.append('IsActive',"true");
formData.append('CatId',"1");
formData.append('Image',this.fileData);
this.capservice.addProduct(formData).subscribe(result=>{
  if(result){
    this.GetProductList();
  }
  else{
    alert("Duplicate product name is not allowed");
  }
});



}
handleUpload(event:any)
{
  this.fileData = event.target.files[0];
  this.profile = event.target.files[0].name;

}
}


