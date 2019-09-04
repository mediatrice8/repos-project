import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from '../search-service.service';
import {RepoClass} from '../repo-class';
import {User} from '../user';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
   providers: [SearchServiceService],
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  public searchMe = 'mediatrice8';
  public githubUser: string;

  users: User ;
    repoclass: RepoClass;
    public searchRepo: string;
    public resultCount = 12;

    findUser(username) {
      this.githubUser = '';
      this.searchMe  = username;
      this.ngOnInit();
  }
  constructor(public githubUserRequest:SearchServiceService, public userRepos:SearchServiceService) { }

  ngOnInit() {
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
  }

  searchRepos(){
    this.searchRepo ='';
    this.resultCount =10;
  }

}
