import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/services/auth.service';


@Component({
  selector: 'app-menu-employe',
  templateUrl: './menu-employe.component.html',
  styleUrls: ['./menu-employe.component.css']
})
export class MenuEmployeComponent implements OnInit {

  constructor(private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {
  }
  deconnect(){
    this.authService.connected= false;
    this.router.navigate(['/login']);
  }

}
