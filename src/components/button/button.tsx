import { Component, h } from "@stencil/core";

@Component({
  tag: "henris-button",
  styleUrl: "button.scss",
  shadow: true
})
export class Button {
  render() {
    return (
      <button class="button">
        <span class="button__text">
          <slot></slot>
        </span>
      </button>
    );
  }
}
