import {
  Directive,
  EventEmitter,
  Input,
  Output,
  ElementRef,
  OnInit,
  AfterViewInit,
  OnDestroy,
  OnChanges
} from '@angular/core';

declare var tinymce: any;

@Directive({
  selector: '[htmlEditor]'
})
export class TinymceDirective implements OnDestroy, OnChanges {

  @Input() initialText: string;

  private htmlContent: any;

  private editor;

  @Output() private htmlEditorKeyUp: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.el.nativeElement.id,
      plugins: ['image'],
      skin_url: '/assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.htmlEditorKeyUp.emit(content);
        });
      }
    });
  }

  ngOnChanges() {
    if (this.editor) {
      if (this.initialText && this.initialText.length > 0) {
        this.editor.setContent(this.initialText);
      } else {
        this.editor.setContent('');
      }
    }
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
