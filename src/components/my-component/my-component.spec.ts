import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {

  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component><p>Hello World</p></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component enable-toolbar>
          <ion-footer class="ion-no-border">
            <ion-toolbar>
              <p>Hello World</p>
            </ion-toolbar>
          </ion-footer>
      </my-component>
    `);
  });
});
