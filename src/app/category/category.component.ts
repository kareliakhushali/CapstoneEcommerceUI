import { Component ,OnInit} from '@angular/core';
import { CapstoneserviceService } from '../capstoneservice.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  constructor(private service:CapstoneserviceService){}
ngOnInit(): void {
  this.GetCategoryList();
}
CategoryList:any=[];

GetCategoryList(){
  this.service.getCategoryList().subscribe(data=>{
    this.CategoryList = data;
    console.log(data);
  });
}
onEdit(id:any){

}
onDelete(id:any){
  let request = confirm("Are you sure want to delete a record?");
  if(request){
    this.service.deleteCategory(id).subscribe(response=>{
      if(response){
        alert("Record deleted");
        this.GetCategoryList();
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

this.service.addCategory(formData).subscribe(result=>{
  if(result){
    this.GetCategoryList();
  }
  else{
    alert("Duplicate product name is not allowed");
  }
});



}

}