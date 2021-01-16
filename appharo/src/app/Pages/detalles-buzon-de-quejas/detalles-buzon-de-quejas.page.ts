import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-buzon-de-quejas',
  templateUrl: './detalles-buzon-de-quejas.page.html',
  styleUrls: ['./detalles-buzon-de-quejas.page.scss'],
})
export class DetallesBuzonDeQuejasPage implements OnInit {

  NombreCompleto:any;
  Telefono:any;
  Tipo:any;
  DescripcionArea:any;
  DescripcionEstatus:any;


  constructor(private route:ActivatedRoute
              ) { }

  ngOnInit() {
    this.NombreCompleto=this.route.snapshot.paramMap.get('NombreCompleto');
    this.Telefono=this.route.snapshot.paramMap.get('Telefono');
    this.Tipo=this.route.snapshot.paramMap.get('Tipo');
    this.DescripcionArea=this.route.snapshot.paramMap.get('DescripcionArea');
    this.DescripcionEstatus=this.route.snapshot.paramMap.get('DescripcionEstatus');
  }

}
