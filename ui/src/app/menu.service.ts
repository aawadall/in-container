import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: any[] = [];

  // for now hardcode serer address and url 
  serverAddress = "http://localhost:3000";
  url = `${this.serverAddress}/api/menu`;

  constructor(
    private http: HttpClient
  ) { }
}
