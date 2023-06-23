import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    { usuario: 'santi123', nombre: 'Santiago', apellido: 'Aristizabal', sexo: 'Masculino' },
    { usuario: 'carlongas', nombre: 'Carlos', apellido: 'Ruiz', sexo: 'Masculino' },
    { usuario: 'melo22', nombre: 'Franco', apellido: 'Hermosilla', sexo: 'Masculino' },
    { usuario: 'cubaM', nombre: 'Mariana', apellido: 'Cuba', sexo: 'Femenino' },
    { usuario: 'Imiguel', nombre: 'Ivan', apellido: 'San MIguel', sexo: 'Masculino' },
    { usuario: 'euge', nombre: 'Eugenia', apellido: 'Gonzales', sexo: 'Femenino' },
  ];
  
  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index:number){
    this.listUsuarios.splice(index,1);
  }
}
