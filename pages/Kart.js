import React from 'react'
import styles from '../styles/Home.module.css'
import ReactNavbar from '../components/ReactNavbar'
import { useTable } from 'react-table'

export default function Kart() {

    const data = React.useMemo(() => [
        {
            date: '08/05/2001',
            brand: 'Nike',
            productType: 'Shoe',
            price: '$105.00',
            size: '12',
            color: 'white',
            quantity: '15',
        },
        {
            date: '01/01/2001',
            brand: 'Adidas',
            productType: 'Shoe',
            price: '$115.00',
            size: '13',
            color: 'black',
            quantity: '4',
        },
        {
            date: '12/31/2001',
            brand: 'New Balance',
            productType: 'Shoe',
            price: '$165.00',
            size: '9',
            color: 'green',
            quantity: '19',
        },
    ],[])

    const columns = React.useMemo(() => [
        {
            Header: 'Date',
            accessor: 'date', // accessor is the "key" in the data
        },
        {
            Header: 'Brand',
            accessor: 'brand',
        },
        {
            Header: 'Product Type',
            accessor: 'productType',
        },
        {
            Header: 'Price',
            accessor: 'price',
        },
        {
            Header: 'Size',
            accessor: 'size',
        },
        {
            Header: 'Color',
            accessor: 'color',
        },
        {
            Header: 'Quantity',
            accessor: 'quantity',
        },
    ],[])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })

    return(
        <div>
            <ReactNavbar />
            <div className={styles.container}>
                <div className={styles.tableContainer}>
                    <div>
                        <h1>Lorenzo's Kart</h1>
                    </div>
                    <table {...getTableProps()} className={styles.table}>
                        <thead className={styles.thead}>
                            {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                <th className={styles.th}
                                    {...column.getHeaderProps()}
                                >
                                    {column.render('Header')}
                                </th>
                                ))}
                            </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()} className={styles.tbody}>
                            {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} className={styles.tr}>
                                {row.cells.map(cell => {
                                    return (
                                    <td
                                        {...cell.getCellProps()}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                    )
                                })}
                                </tr>
                            )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}