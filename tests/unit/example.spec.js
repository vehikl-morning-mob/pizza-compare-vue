import { shallowMount } from '@vue/test-utils'
import SinglePizzaForm from "../../src/components/SinglePizzaForm";

describe('SinglePizzaForm.vue', () => {
  it('renders an input for price', () => {
    const wrapper = shallowMount(SinglePizzaForm)

    // find an input textbox for price

    expect(wrapper.find('input[name="price"]').exists()).toBeTruthy();
  })

  it('renders an input for diameter', () => {
    const wrapper = shallowMount(SinglePizzaForm)

    expect(wrapper.find('input[name="diameter"]').exists()).toBeTruthy();
  })

  it('enforces that the diameter cannot be larger than 50', () => {
    const wrapper = shallowMount(SinglePizzaForm)

    let diameterInputWrapper = wrapper.find('input[name="diameter"]');

    expect(diameterInputWrapper.attributes().max).toBe("50");
  })

  it('render the output for the price per sq. inch', () => {
    const wrapper = shallowMount(SinglePizzaForm)

    expect(wrapper.find('input[name="pricePerSquareInch"]').exists()).toBeTruthy();
  })

  it('renders price per square inch', async () => {
    const wrapper = shallowMount(SinglePizzaForm)
    const priceInputWrapper = wrapper.find('input[name="price"]');
    await priceInputWrapper.setValue(1);
    const diameterInputWrapper = wrapper.find('input[name="diameter"]');
    await diameterInputWrapper.setValue(2);

    let pricePerSquareInchInputWrapper = wrapper.find('input[name="pricePerSquareInch"]');
    expect(pricePerSquareInchInputWrapper.element.value).toEqual( `${(priceInputWrapper.element.value /(3.14 * Math.pow(diameterInputWrapper.element.value/2, 2)))}`);

  })
  it('check for the diameter label', () => {
    const wrapper = shallowMount(SinglePizzaForm)

    let labelWrapper = wrapper.find('label[for="diameter1"]');

    expect(labelWrapper.exists()).toBeTruthy();
    expect(labelWrapper.text()).toBe('Diameter')
  })

  it('check for the pricePerSquareInch label', () => {
    const wrapper = shallowMount(SinglePizzaForm)

    let labelWrapper = wrapper.find('label[for="pricePerSquareInch"]');

    expect(labelWrapper.exists()).toBeTruthy();
    expect(labelWrapper.text()).toBe('Price Per Square Inch')
  })

  it('check for the Price Input label', () => {
    const wrapper = shallowMount(SinglePizzaForm)

    let labelWrapper = wrapper.find('label[for="price"]');

    expect(labelWrapper.exists()).toBeTruthy();
    expect(labelWrapper.text()).toBe('Price')
  })

  it('check that user cannot type into price per square inch field', async () => {
    const wrapper = shallowMount(SinglePizzaForm)

    let pricePerSquareInchWrapper = wrapper.find('input[name="pricePerSquareInch"]');

    //await pricePerSquareInchWrapper.setValue(1);
    expect(pricePerSquareInchWrapper.element.disabled).toBeTruthy();
  })




})
