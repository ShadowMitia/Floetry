import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize/capitalize';
import { HtmlifyPipe } from './htmlify/htmlify';

@NgModule({
	declarations: [CapitalizePipe,
    HtmlifyPipe],
	imports: [],
	exports: [CapitalizePipe,
    HtmlifyPipe]
})
export class PipesModule {}
