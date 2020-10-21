import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../../components/Counter';

describe('Probando el componente Counter', () => {
    
    test('Probando  que el <Counter /> se muestre correctamente', () => {
        
      const wrapper = shallow(<Counter />);
      
      expect( wrapper ).toMatchSnapshot();

    })
    

})
