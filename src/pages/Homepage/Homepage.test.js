import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage';

describe('Homepage component', () => {
  it('should render without errors', () => {
    const component = shallow(<Homepage />);
    const wrapper = component.find('.home-bodyDiv');
    expect(wrapper.length).toBe(1);
  });

  it('should update search state when search input changes', () => {
    const component = shallow(<Homepage />);
    const searchInput = component.find('input[type="search"]');
    searchInput.simulate('change', { target: { value: 'test' } });
    expect(component.state().search).toBe('test');
  });

  it('should update page state when page number is clicked', () => {
    const component = shallow(<Homepage />);
    const pageBtn = component.find('.pagesbtn').first();
    pageBtn.simulate('click');
    expect(component.state().page).toBe(1);
  });
  
  it('should disable the prev button on the first page', () => {
    const component = shallow(<Homepage />);
    const prevBtn = component.find('.Arrowbtn').first();
    expect(prevBtn.hasClass('disablebtn')).toBe(true);
  });

  it('should disable the next button on the last page', () => {
    const component = shallow(<Homepage />);
    component.setState({ list: new Array(20).fill({ title: 'test', body: 'test' }) });
    component.setState({ page: 2 });
    const nextBtn = component.find('.Arrowbtn').last();
    expect(nextBtn.hasClass('disablebtn')).toBe(true);
  });
});
