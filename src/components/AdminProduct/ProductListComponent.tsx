// src/components/AdminProduct/ProductListComponent.tsx
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
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import { useRouter } from 'next/navigation';
import { SelectProduct } from '@/db/schema/product/products';

interface ProductTableProps {
    products: SelectProduct[];
    onDelete: (id: number) => void;  // Add this prop to handle delete action
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onDelete }) => {
    const theme = useTheme();
    const router = useRouter();

    const handleViewClick = (productId: number) => {
        router.push(`/product/${productId}`);
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
                        <TableCell>Vendor</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product, index) => (
                        <TableRow
                            key={product.id}
                            sx={{ cursor: 'pointer' }}
                        >
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>
                                <Box
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        backgroundColor: theme.palette.grey[300],
                                    }}
                                />
                            </TableCell>
                            <TableCell>{product.title}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.companyName}</TableCell>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <VisibilityIcon
                                        sx={{
                                            mr: 1,
                                            color: theme.palette.primary.main,
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => handleViewClick(product.id)}
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
                                        onClick={() => onDelete(product.id)}  // Trigger delete action
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
