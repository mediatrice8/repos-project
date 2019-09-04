import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {RepoClass} from './repo-class';
import {User} from './user';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  repoclass: RepoClass;
  users: User;
  newRepository: any;
  searchRepo: any;

  constructor(private http: HttpClient) {
      this.repoclass = new RepoClass('', '', '', new Date());
      this.users = new User('', '', '', 0, '', new Date(), 0, 0);
  }

  githubUser(searchName) {
      interface ApiResponse {
          name: string;
          html_url: string;
          description: string;
          created_at: Date;
          login: string;
          public_repos: number;
          followers: number;
          following: number;
          avatar_url: string;
      }

      const promise = new Promise((resolve) => {
          this.http.get<ApiResponse>('https://api.github.com/users/' + searchName + '?access_token=' + environment.myApi).toPromise().then(getResponse => {
              this.users.name = getResponse.name;
              this.users.html_url = getResponse.html_url;
              this.users.login = getResponse.login;
              this.users.avatar_url = getResponse.avatar_url;
              this.users.public_repos = getResponse.public_repos;
              this.users.created_at = getResponse.created_at;
              this.users.followers = getResponse.followers;
              this.users.following = getResponse.following;
              resolve();
          },);
      });
      return promise;

  }

  gitUserRepos(searchMe) {
      interface ApiResponse {
          name: string;
          description: string;
          created_at: Date;
      }





