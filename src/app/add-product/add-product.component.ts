import { Component, OnInit } from '@angular/core';
import { CapstoneserviceService } from '../capstoneservice.service';
import { FormGroup,FormBuilder,Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  ProductList: any = [];
  CategoryList:any = [];
  constructor(private capsservice:CapstoneserviceService, private route:Router, private formBuilder: FormBuilder) {}

  addProduct: FormGroup | any;
  ngOnInit(): void {
    this.addProduct = this.formBuilder.group({
      Name: ["", [Validators.required, Validators.minLength(2),Validators.maxLength(20),this.nameValidator]],
      Qty: [0, [Validators.required, Validators.min(1),Validators.max(100000)]],
      Rate: [0, [Validators.required, Validators.min(1),Validators.max(10000000)]],
      Category: [0, [Validators.required,Validators.min(1)]],
      IsActive: ["true"],
    });
    this.GetProductList();
  }

  formData: any = {};  
  imageUrl: string = this.capsservice.imageUrl;
  fileData: any = null;
  profile?: string;

  GetProductList() {
    this.capsservice.getProductList().subscribe(data => {
      this.ProductList = data;
      console.log(data);
    });
  }

  nameValidator(control: AbstractControl): {[key: string]: any} | null {
    const nameRegex = /^[a-zA-Z]/;
    const valid = nameRegex.test(control.value);
    return valid ? null : {'nameInvalid': true};
  }

  onSave() {

   
    const ProductData = this.addProduct.value;

    console.log(ProductData.Name, ProductData.Qty, ProductData.Rate, ProductData.IsActive,ProductData.Category);

    const formData = new FormData();
    formData.append('Id', '0');
    formData.append('Name', ProductData.Name);
    formData.append('Qty',ProductData.Qty);
    formData.append('Rate',ProductData.Rate);
    formData.append('Profile','default.jpg');
    formData.append('IsActive', ProductData.IsActive);
 formData.append('CatId', ProductData.Category);
 formData.append('Image', this.fileData);
 this.capsservice.addProduct(formData).subscribe(result => {
  if(result) {
    alert("Product added successfully")
    this.route.navigate(['/product']);

  }
  else {
    alert("Duplicate Product name is not allowed");
  }
});
}

handleUpload(event: any) {

   this.fileData = event.target.files[0];
  
   this.profile = event.target.files[0].name;
  
  }
  
  isFormValid() {
  
   return this.addProduct && this.addProduct.valid;
  
}


}
