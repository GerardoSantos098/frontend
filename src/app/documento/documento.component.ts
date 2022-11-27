import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentoServiceService } from '../documento-service.service';
import { Documento } from '../documento';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss']
})
export class DocumentoComponent implements OnInit{

  datosForm!: FormGroup;
  documento: Documento | undefined;

  constructor(
    private readonly fb: FormBuilder,
    private documentoServiceService: DocumentoServiceService,
  ){}

  ngOnInit(): void {
    this.datosForm = this.initForm();
  }

  initForm(): FormGroup{
    return this.fb.group({
      palabra: [''],
    })
  }

  public buscarPalabra(): void{
    this.documentoServiceService.buscarPalabra(this.datosForm.value.palabra)
    .subscribe(res =>{
      if(res != null){
        this.documento = res;
      }
    })
  }
}
