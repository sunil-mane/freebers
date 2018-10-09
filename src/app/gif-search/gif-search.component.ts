import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GifSearchService } from '../services/gif-search.service';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GifSearchComponent implements OnInit {
  gifSearchForm: FormGroup;
  gifs: any[];
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
        this.gifs = result.json().data;
        console.log(this.gifs);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
