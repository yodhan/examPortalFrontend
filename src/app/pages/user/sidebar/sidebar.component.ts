import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@app/service/category/category.service';

@Component({
  selector: 'app-user-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{
  categories:any;
  constructor(private categoryService :CategoryService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.categoryService.getCategories().subscribe((data:any)=>{
      this.categories=data;
    })
  }

}
