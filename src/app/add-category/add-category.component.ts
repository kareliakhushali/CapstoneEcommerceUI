import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CapstoneserviceService } from '../capstoneservice.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

 
  CategoryList: any = [];
  
  constructor(private capsservice:CapstoneserviceService, private route:Router, private formBuilder: FormBuilder) {}

  addCategory: FormGroup | any;
  ngOnInit(): void {
    this.addCategory = this.formBuilder.group({
      Name: ["", [Validators.required, Validators.minLength(2),Validators.maxLength(20),this.nameValidator]],
     
    });
    this.GetCategoryList();
  }
 
  formData: any = {};  
  fileData: any = null;
 

  GetCategoryList() {
    this.capsservice.getCategoryList().subscribe(data => {
      this.CategoryList = data;
      console.log(data);
    });
  }
  nameValidator(control: AbstractControl): {[key: string]: any} | null {

     const nameRegex = /^[a-zA-Z]/;
    
   const valid = nameRegex.test(control.value);
    
   return valid ? null : {'nameInvalid': true};
    
     }
 
 

  onSave() {

    if (this.addCategory.valid) {
    const categoryData = this.addCategory.value;

    console.log(categoryData.Name);

    const formData = new FormData();
    formData.append('id', '0');
    formData.append('catName', categoryData.Name);
   
    this.capsservice.addCategory(formData).subscribe(result => {
      if(result) {
        alert("Category added successfully")
        this.route.navigate(['/category']);

      }
      else {
        alert("Duplicate category name is not allowed");
      }
    });
  }
}

   
  isFormValid() {
    return this.addCategory && this.addCategory.valid;
  }  }






