import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private _peopleList: Person[] = [
    {
      id: 1, 
      name: 'Sergio', 
      surname: 'García', 
      nickname:'SeryiDev',
      image: 'http://drive.google.com/uc?export=view&id=1hypbmSb9Wfn-VIGLzXcwoQHXoD_AfyDI'
    },
    {
      id: 2, 
      name: 'Hanane', 
      surname: 'Arrazouki',
      nickname:'No nickname'
    },
    {
      id: 3, 
      name: 'Juan Antonio', 
      surname: 'García',
      nickname:'Arrow'
    },
    {
      id: 4, 
      name: 'Antonio', 
      surname: 'Suárez',
      nickname:'No nickname'
    },
    {
      id: 5, 
      name: 'Gonzalo José', 
      surname: 'Salmerón',
      nickname:'No nickname'
    },
    {
      id: 6, 
      name: 'Raúl', 
      surname: 'Vargas',
      nickname:'El Mirlo'
    },
    {
      id: 7, 
      name: 'Adrián', 
      surname: 'Dueñas',
      nickname:'No nickname'
    },
    {
      id: 8, 
      name: 'Rubén', 
      surname: 'Díaz',
      nickname:'No nickname'
    },
    {
      id: 9, 
      name: 'Natalia', 
      surname: 'Contreras',
      nickname:'No nickname'
    },
    {
      id: 10, 
      name: 'Nesrin', 
      surname: 'Edwan',
      nickname:'No nickname'
    }
  ]

  id: number = this._peopleList.length + 1

  constructor() { }

  getPeopleList() {
    return this._peopleList;
  }

  getPersonByID(id: number) {
    return this._peopleList.find(p => p.id == id)
  }

  addPerson(person: Person) {
    person.id = this.id++
    this._peopleList.push(person)
  }

  deletePersonByID(id: number) {
    this._peopleList = this._peopleList.filter(p => p.id != id)
  }

  updatePerson(person:Person) {
    let _person = this._peopleList.find(p => p.id == person.id);
    if(_person) {
      _person.name = person.name;
      _person.surname = person.surname;
      _person.nickname = person.nickname;
      _person.image = person.image;
    }
  }
}