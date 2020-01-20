import React from 'react';
import {size} from 'lodash';

const Showing = ({items = [], position = 1}) => (
      <h6 className='font-weight-bold ml-3'>Mostrando {size(items)} resultados.</h6>
);

export default Showing;

