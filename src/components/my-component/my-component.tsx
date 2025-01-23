import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css'
})
export class MyComponent {
  @Element() el: HTMLElement;

	@Prop({ reflect: true }) disablePadding: boolean;
	@Prop({ reflect: true }) enableToolbar: boolean = true;
	@Prop({ reflect: true }) showShadow: boolean = false;

	private hasMenubar: boolean = false;

	getClassnames(): string {
		const classes = [];
		if (this.disablePadding) {
			classes.push('my-app-footer-disable-padding');
		}
		if (this.showShadow || this.hasMenubar) {
			classes.push('my-app-footer-has-shadow');
		}
		return classes.join(' ') || null;
	}
  render() {
    return (
      <Host class={this.getClassnames()}>
        <ion-footer
          class="ion-no-border"
        >
          {this.enableToolbar ? (
            <ion-toolbar>
              <slot />
            </ion-toolbar>
          ) : (
            <slot />
          )}
        </ion-footer>
      </Host>
		);
  }
}
