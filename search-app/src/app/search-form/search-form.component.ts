import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import {SearchClass} from '../search-class';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchInfo = new SearchClass('');
  @Output() getName = new EventEmitter<SearchClass>();

  searchFor(informa){
      this.getName.emit(informa.value.find);
      console.log(informa.value.find)
      informa.reset();
  }
  constructor() { }

  ngOnInit() {
  }

}
