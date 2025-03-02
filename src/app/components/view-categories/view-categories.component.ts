import { Component } from '@angular/core';
import { CategoryService } from '@app/service/category/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  standalone: false,
  templateUrl: './view-categories.component.html',
  styleUrl: './view-categories.component.scss'
})
export class ViewCategoriesComponent {
  constructor(private categoryService:CategoryService){}

  categories=[
    {
      cid:23,
      title:"programming",
      description: "for testinmg"
    },
    {
      cid:23,
      title:"tech",
      description: "for testinmg"
    },
    {
      cid:23,
      title:"code",
      description: "for testinmg"
    },
    {
      cid:23,
      title:"AI",
      description: "for testinmg"
    },
  ]

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.categoryService.getCategories().subscribe((data:any)=>{
      this.categories=data;
      console.log(data);
      
    },
  (error)=>{
    console.log(error);
    Swal.fire("Error !!","Error in loading data",error);
    
  });
  }

}
