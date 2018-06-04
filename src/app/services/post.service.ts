import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PostService {
  postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // Retrieve
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

  // Add
  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postUrl, post, httpOptions);
  }

  // Edit
  updatePost(post: Post): Observable<Post> {
    const url = `${this.postUrl}/${post.id}`;

    return this.http.put<Post>(url, post, httpOptions);
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postUrl}/${id}`;

    return this.http.get<Post>(url);
  }

  // Delete
  removePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postUrl}/${id}`;

    return this.http.delete<Post>(url, httpOptions);
  }
}
