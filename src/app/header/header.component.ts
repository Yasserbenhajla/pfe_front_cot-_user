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
    /*
   this.userDetails = this.service.userDetails();
    this.EncadrantDetails = this.service.EncadrantDetails();
    */
  }


  ngOnInit(): void {
    /*
    console.log(this.userDetails);
    console.log(this.EncadrantDetails);
*/
  }

  logout(){
    console.log("logout");
    localStorage.clear()
    this.router.navigate(['/login']).then(()=>{
      window.location.reload();
    });

  }
}
