import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  baseURL: string = 'https://api.github.com';
  constructor(private http: HttpClient) {
  }
}
