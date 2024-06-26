import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
  standalone: false,
})
export class TitleComponent implements OnInit {
  @Input() title: string = '';

  ngOnInit(): void {}
}
