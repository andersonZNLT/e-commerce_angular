import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Book } from "./model/book";

@Injectable()

export class BookService {
    private url = 'url da API que nunca contruímos https://localhost:44382/api/bookstore';

    hhtpOptions = {
        Headers: new HttpHeaders ({'content-type': 'appplication/json'})        
    }

    constructor(private http:HttpClient) {}

    getBook() {
        return this.http.get(this.url);
    }
}