import React, { Component } from 'react';
import EmployeeRow from './EmployeeRow';
import {Table} from 'react-bootstrap';

class EmployeeTable extends Component {
  render() {
    let key = 1;

    const actions = this.props.actions;

    let employeeRows = this.props.employees.map(function (employee) {
      return (
        <EmployeeRow employee={employee} key={++key} actions={actions} />
      );
    });

    return (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Admin</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
          {employeeRows}
        </tbody>
      </Table>
    );
  }
}

EmployeeTable.defaultProps = {
  employees: []
};

EmployeeTable.propTypes = {
  employees: React.PropTypes.array.isRequired
};

export default EmployeeTable;
