import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product_code=""
  product_name=""
  manu_date=""
  exp_date=""
  brand=""
  price=""
  seller_name=""
  distributor_name=""

  constructor(private api:ApiService){}
  
  


readValues=()=>
{
let data :any = {"product_code":this.product_code,"product_name":this.product_name," manu_date":this.manu_date,"exp_date":this.exp_date,"brand":this.brand,"price":this.price,"seller_name":this.seller_name,"distributor_name":this.distributor_name }
console.log(data)
this.api.addProducts(data).subscribe(
  (response :any)=>{
    console.log(response)
    
  
  }
)

}
}