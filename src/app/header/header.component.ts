import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userDetails:any;
  EncadrantDetails:any;

  constructor(private service: CrudService,private router:Router) {
/*if(this.userDetails==true){
 this.userDetails = this.service.userDetails();
}
else{ this.EncadrantDetails = this.service.EncadrantDetails();}*/



  }

/*
  ngOnInit(): void {
if(this.userDetails==true){
    console.log(this.userDetails);
}else{
    console.log(this.EncadrantDetails);

}

  }
*/

  logout(){
    console.log("logout");
    localStorage.clear()
    this.router.navigate(['/login']).then(()=>{
      window.location.reload();
    });

  }

}
