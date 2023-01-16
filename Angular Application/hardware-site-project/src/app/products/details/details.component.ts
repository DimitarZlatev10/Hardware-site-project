import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id: string | null = '';
  item: any = [];
  isLogged: string | null = null;
  userInfo: any = [];
  errorMessage = '';

  updatePage() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.isLogged = this.localService.getData('token');

    this.api.getProductById(this.id).subscribe({
      next: (value) => {
        this.item = value;
        console.log(value);
      },
      error: (err) => {
        console.error(err);
      },
    });

    const email = this.localService.getData('token');
    this.api.getUserData(email).subscribe({
      next: (value) => {
        this.userInfo = value;
        console.log(value);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  constructor(
    private route: ActivatedRoute,
    private localService: LocalService,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.updatePage();
  }
}
