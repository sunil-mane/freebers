import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GifSearchService } from '../services/gif-search.service';
/**
 * Gif Search Component
 */
@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GifSearchComponent {
  gifSearchForm: FormGroup;
  gifs: any[];
  count: number;
  constructor(private gifSearchService: GifSearchService) {
    this.gifSearchForm = new FormGroup({
      query: new FormControl(''),
      option: new FormControl('all')
    });
  }
  /**
   * Gif Search
   */
  gifSearch() {
    this.gifSearchService.search(this.gifSearchForm.get('query').value).subscribe(
      (result) => {
        this.gifs = result.json().data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
