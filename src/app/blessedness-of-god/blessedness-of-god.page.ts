import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blessedness-of-god',
  templateUrl: './blessedness-of-god.page.html',
  styleUrls: ['./blessedness-of-god.page.scss'],
})
export class BlessednessOfGodPage {
  constructor(public readonly route: ActivatedRoute) {}
}