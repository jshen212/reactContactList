import React from 'react';
import './TableHeader.css';

export class TableHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      tableHeaders: ["Name", "Email", "Number", "Action"]
    };
  }


  render() {
    const headers = this.state.tableHeaders.map((header, i) => {
      return <th key={i}>{header}</th>;
    });

    return (
      <thead>
        <tr>
          {headers}
        </tr>
      </thead>
    );
  }
}
