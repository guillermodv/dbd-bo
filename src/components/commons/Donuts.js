import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const Donuts = ({title="title", succeded, failed}) => {
  const data = {
    labels: [
      'Succeded',
      'Failed'
    ],
    datasets: [{
      data: [succeded, failed],
      backgroundColor: [
        '#FF6384',
        '#36A2EB'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB'
      ]
    }]
  };

  return(
      <div className="row">
        <div className="col-6">
          <h6>Total files: {succeded+failed}</h6>
        </div>
        <div className="col-6">
          <Doughnut data={data}/>
        </div>
      </div>
  );

};

export default Donuts;
