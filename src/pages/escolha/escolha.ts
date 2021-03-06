import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import {Carro} from "../../domain/carro";
import {Acessorio} from "../../domain/acessorio";

@Component({
	templateUrl: 'escolha.html'
})
export class EscolhaPage {

	public carro: Carro;
	public acessorios: Acessorio[];
	private _precoTotal: number;

	constructor(public navParams: NavParams) {

		this.carro = navParams.get('carroSelecionado');
		this._precoTotal = this.carro.preco;

		this.acessorios = [
			new Acessorio('Freio ABS', 800),
			new Acessorio('Ar-condicionado', 1000),
			new Acessorio('MP3 Player', 500)
		];
	}

	get precoTotal(): number {

		return this._precoTotal;
	}

	atualizaTotal(ligado: boolean, acessorio: Acessorio): void {

		ligado ? this._precoTotal+= acessorio.preco : this._precoTotal-= acessorio.preco;
	}
}
