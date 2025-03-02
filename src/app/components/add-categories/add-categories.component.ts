import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@app/service/category/category.service';
import { log } from 'console';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-categories',
  standalone: false,
  templateUrl: './add-categories.component.html',
  styleUrl: './add-categories.component.scss'
})
export class AddCategoriesComponent implements OnInit {
  
  category ={
    title: "",
    description:''
  };
  
  constructor(private categoryService: CategoryService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  onSubmit() {
    this.categoryService.addCategories(this.category).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire("Success !!","Category added", 'success');
      },
      (error)=>{
        console.log(error)
        Swal.fire("Error","Encountered error during category addition", 'error');
      }
    );
  }

}
