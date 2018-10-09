import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GifSearchService } from '../services/gif-search.service';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.css']
})
export class GifSearchComponent implements OnInit {
  gifSearchForm: FormGroup;
  constructor(private gifSearchService: GifSearchService) {
    this.gifSearchForm = new FormGroup({
      query: new FormControl(''),
      option: new FormControl('all')
    });
  }

  ngOnInit() {
  }

  gifSearch() {
    this.gifSearchService.search(this.gifSearchForm.get('query').value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
