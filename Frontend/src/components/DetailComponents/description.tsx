import React from 'react';

type Props = {
    description: string
  };

function Description({description}:Props) {
  return (
    <div className="section">
                    <h4 className="s-property-title">Description</h4>
                    <div className="s-property-content">
                      <p>{description}</p>
                    </div>
                  </div>
  );
}

export default Description;
