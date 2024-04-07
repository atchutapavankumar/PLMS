import React from 'react';
import './index.css';

const optionsMap = {
  "BEC071002": "K. Srinivasa Rao",
  "BEC071003": "P. A. V Krishna Rao",
  "BEC071004": "G. Prasad",
  "BEC071005": "K. Bhaskara Rao",
  "BEC071006": "B. Krishnaiah",
  "BEC071007": "M. Praveen Kumar",
  "BEC071008": "N. Srinivasa Rao",
  "BEC071009": "K. Sai Prasanth",
  "BEC071010": "P. Ratna Prakash",
  "BEC071011": "P. Ravi Kumar",
  "BEC071012": "K. Suresh Kumar",
  "BEC071013": "S. Ratna Babu",
  "BEC071017": "Mastanaiah Naidu Yasam",
  "BEC071018": "P. Sreedhar",
  "BEC071019": "BBK. Prasad",
  "BEC071020": "Surekha Peravali"
};

const WorkloadHistroyCard = (props) => {
  const { data } = props;
  const assignText = optionsMap[data.assign];

  return (
    <div className='table-row'>
      <p>{data.username}</p>
      <p>{data.class}</p>
      <p>{data.date}</p>
      <p>{data.period}</p>
      <p>{assignText}</p>
      <p>{data.status}</p>
    </div>
  );
};

export default WorkloadHistroyCard;
