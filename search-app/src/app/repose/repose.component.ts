import { Component, OnInit } from '@angular/core';
import{SearchServiceService} from '../search-service.service';
import{RepoClass} from '../repo-class';


@Component({
  selector: 'app-repose',
  templateUrl: './repose.component.html',
  providers: [SearchServiceService],
  styleUrls: ['./repose.component.css']
})
export class ReposeComponent implements OnInit {
  repoclass: RepoClass;
  public searchRepo: string;
  public resultCount = 12;
  searchRepos() {
    this.searchRepo = '';
    this.resultCount = 10;
    this.getDataFunction();

  }

  constructor(public gitRepoRequest: SearchServiceService) { }

  ngOnInit() {
    this.resultCount = 5;
      this.gitRepoRequest.gitRepos(this.searchRepo);
  }


      getDataFunction() {
          this.gitRepoRequest.gitRepos(this.searchRepo);

      }

  }


