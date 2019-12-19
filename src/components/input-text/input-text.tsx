import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "henris-input-text",
  styleUrl: "input-text.scss",
  shadow: true
})
export class InputText {
  @Prop() label: string;

  render() {
    return (
      <div class="input-text">
        <input type="text" />
        <label>{this.label}</label>
      </div>
    );
  }
}
