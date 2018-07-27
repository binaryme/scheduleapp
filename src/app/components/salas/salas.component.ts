import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {
  @Input() Nombre: String;
  @Input() Horario: String;
  @Input() Empresa: String;
  @Input() Usuario: String;
  @Input() Personas: String;
  @Input() CoffeeBreak: String;

  getName() {
    this.Nombre = 'LR1';
    return this.Nombre;
  }

  getHorario() {
    this.Horario = '9:00 - 12:00';
    return this.Horario;
  }

  getEmpresa() {
    this.Empresa = 'Neoris';
    return this.Empresa;
  }

  getUsuario() {
    this.Usuario = 'Mariana Arrambide';
    return this.Usuario;
  }

  getPersonas() {
    this.Personas = '17 personas';
    return this.Personas;
  }

  getCoffeeBreak() {
    this.CoffeeBreak = 'Si se necesita';
    return this.CoffeeBreak;
  }

  constructor() { }

  ngOnInit() {
  }

}
