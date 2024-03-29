import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { SimpleGlobal } from 'ng2-simple-global';

@Component({
  selector: 'app-salamaservices',
  templateUrl: './salamaservices.component.html',
  styleUrls: ['./salamaservices.component.css']
})
export class SalamaservicesComponent implements OnInit {
  navbarOpen = false;
  head = "Salama";
  bg="bg_img";
  nav_arabic = "/salamaservices-arabic";
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  localVar;
  Lang: any = {}
  model: any = {};
  data: any = {};
  constructor(private apiService: APIService, private router: Router, private sg: SimpleGlobal) { }

  ngOnInit() {
  }
  newsletter(model) {
    this.apiService.newsletter(model).subscribe((response) => {
      this.data = response;
      console.log(this.data);
      swal(this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
    })
  };
}
