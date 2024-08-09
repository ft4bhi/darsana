"use client";
import React from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import { useRouter } from 'next/navigation';

interface Product {
    id: number;
    image: string;
    productName: string;
    category: string;
    availability: boolean;
    vendor: string;
}

const products: Product[] = [
    {
        id: 1,
        image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        productName: 'Nilgiri Hair Oil',
        category: 'Oil',
        availability: true,
        vendor: 'Hari Krishnan',
    },
    {
        id: 2,
        image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        productName: 'Nilgiri Hair Oil',
        category: 'Oil',
        availability: true,
        vendor: 'Hari Krishnan',
    },
    {
        id: 3,
        image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        productName: 'Nilgiri Hair Oil',
        category: 'Oil',
        availability: true,
        vendor: 'Hari Krishnan',
    },
    {
        id: 4,
        image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        productName: 'Nilgiri Hair Oil',
        category: 'Oil',
        availability: true,
        vendor: 'Hari Krishnan',
    },
];

const ProductTable = () => {
    const theme = useTheme();
    const router = useRouter();

    const handleRowClick = (productId: number) => {
        router.push(`/adminProduct/productList/${productId}`);
    };

    return (
        <Box
            sx={{
                p: 2,
                height: 'calc(100vh - 64px)',
                overflow: 'auto',
            }}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Sl.No.</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Availability</TableCell>
                        <TableCell>Vendor</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow
                            key={product.id}
                            onClick={() => handleRowClick(product.id)}
                            sx={{ cursor: 'pointer' }}
                        >
                            <TableCell>{product.id}</TableCell>
                            <TableCell>
                                <img
                                    src={product.image}
                                    alt={product.productName}
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </TableCell>
                            <TableCell>{product.productName}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>
                                {product.availability ? 'Yes' : 'No'}
                            </TableCell>
                            <TableCell>{product.vendor}</TableCell>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <ShoppingCartIcon
                                        sx={{
                                            mr: 1,
                                            color: theme.palette.primary.main,
                                            cursor: 'pointer',
                                        }}
                                    />
                                    <EditIcon
                                        sx={{
                                            mr: 1,
                                            color: theme.palette.primary.main,
                                            cursor: 'pointer',
                                        }}
                                    />
                                    <DeleteIcon
                                        sx={{
                                            color: theme.palette.error.main,
                                            cursor: 'pointer',
                                        }}
                                    />
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default ProductTable;