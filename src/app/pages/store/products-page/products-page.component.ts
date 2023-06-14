import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent {

  public products$!: Observable<any[]>;

  constructor(private data: DataService){

  }

  ngOnInit(){
    this.products$ = this.data.getProducts();
  }
}
