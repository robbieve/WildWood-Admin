import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CustomPaginationActionsTable from '../../../components/CustomPaginationActionsTable';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class OffersTable extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      rowsPerPage: 10,
    };
  }

  handleChangePage = page => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = rowsPerPage => {
    this.setState({ page: 0, rowsPerPage });
  };

  render() {
    const { rows } = this.props;
    const { rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - (page * rowsPerPage));
    console.log('----------', rows)
    return (
      <CustomPaginationActionsTable
        handleChangeRowsPerPage={this.handleChangeRowsPerPage}
        handleChangePage={this.handleChangePage}
        rows={rows}
        rowsPerPage={rowsPerPage}
        page={page}
      >
        <TableHead>
          <TableRow>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Description</CustomTableCell>
            <CustomTableCell>Story</CustomTableCell>
            <CustomTableCell>Pricing</CustomTableCell>
            <CustomTableCell>Created At</CustomTableCell>
            <CustomTableCell>Featured Image Url</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage).map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.story}</TableCell>
              <TableCell>{row.pricing}</TableCell>
              <TableCell>{row.created}</TableCell>
              <TableCell>
                {row.featured_image_url}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 48 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </CustomPaginationActionsTable>
    );
  }
}

OffersTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({})),
};

export default OffersTable;
