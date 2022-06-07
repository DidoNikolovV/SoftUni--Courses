import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private symbols: number = 250;
  @Input() article: Article;
  @Input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn : boolean = false;
  imageIsShown : boolean = false;
  imageButtonTitle: string = "Show Image";

  constructor() { 
    this.articleDescLen = 0;
    this.descToShow = "";
  }

  readMore() {
    this.articleDescLen += this.symbols;
    if(this.articleDescLen >= this.articleDesc.length) {
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  toggleImage() {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageIsShown ? "Hide Image": "Show Image";
  }

  hideDesc() {
      this.descToShow = "";
      this.articleDescLen = 0;
      this.showReadMoreBtn = true;
      this.showHideBtn = false;
  }

  ngOnInit(): void {
  }

}