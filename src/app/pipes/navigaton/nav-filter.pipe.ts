import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trackByPropFn',
})
export class trackByPropFnPipe implements PipeTransform {
  transform(links: any[], showOnly?: string[]): any[] {
    if (!showOnly || showOnly.length === 0) return links;
    return links.filter((link) => showOnly.includes(link.label));
  }
}
