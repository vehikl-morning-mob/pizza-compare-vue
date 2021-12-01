import App from "../../src/App";
import {mount} from "@vue/test-utils";
import SinglePizzaForm from "../../src/components/SinglePizzaForm";

describe('App', () => {
  it('renders two single pizza forms', () => {
      const wrapper = mount(App);
      expect(wrapper.findAllComponents(SinglePizzaForm).length).toBe(2);
  })
  it('check for the cheapest pricePerSquareInch', async () => {

      // render the app
      const wrapper = mount(App)
      const pizzaForms = wrapper.findAllComponents(SinglePizzaForm);

      // set the first price (make this one cheaper)
      // set the first diameter
      const price1InputWrapper = pizzaForms[0].find('input[name="price"]');
      await price1InputWrapper.setValue(6);
      const diameter1InputWrapper = pizzaForms[0].find('input[name="diameter"]');
      await diameter1InputWrapper.setValue(12);

      // set the second price
      // set the second diameter
      const price2InputWrapper = pizzaForms[1].find('input[name="price"]');
      await price2InputWrapper.setValue(10);
      const diameter2InputWrapper = pizzaForms[1].find('input[name="diameter"]');
      await diameter2InputWrapper.setValue(12);

      // the first pizza form has the class "green-background"
      expect(pizzaForms[0].classes()).toContain('green-background')
      // the second pizza form does not have the class "green-background"
      expect(pizzaForms[1].classes()).not.toContain('green-background')
    });
});
