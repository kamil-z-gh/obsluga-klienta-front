import ColoredIconWrapper from "./ColoredIconWrapper";
import Menu from "@material-ui/icons/Menu";
import { mount, shallow } from "enzyme";

describe("<ColoredIconWrapper />", () => {
  it("renders with text as chidlren without error", () => {
    const wrapper = mount(
      <ColoredIconWrapper color="#fff3ca">Hello World!</ColoredIconWrapper>
    );
    expect(wrapper.text()).toMatch("Hello World!");
  });

  it("renders with Mui icon as children without error", () => {
    const wrapper = shallow(
      <ColoredIconWrapper color="#fff3ca">
        <Menu />
      </ColoredIconWrapper>
    );
    expect(wrapper.containsMatchingElement(<Menu />)).toEqual(true);
  });
});
