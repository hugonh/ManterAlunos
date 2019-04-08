import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Aluno} from '../alunos/pessoa';

@Injectable({
    providedIn: 'root'
})

export class PessoasService {

    constructor(private http:HttpClient) { }
  
    lista(){

      return this.http.get<Aluno[]>('http://gilsonpolito-api.herokuapp.com/alunos');
 
    }
  
  
   
  } 
