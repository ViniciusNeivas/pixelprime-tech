import { Component } from '@angular/core';
import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
produtos: IProduto[] | undefined

constructor(
  private produtosService: ProdutosService
){}

ngOnInit():void {
  this.produtos = this.produtosService.getAll();
}


}
