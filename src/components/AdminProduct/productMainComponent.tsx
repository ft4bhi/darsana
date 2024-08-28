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
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import { useRouter } from 'next/navigation';
import { SelectProduct } from '@/db/schema/product/product';

interface ProductTableProps {
    products: SelectProduct[];
    onDelete: (id: number) => void;
    onToggleVisibility: (id: number) => void;
    onEdit: (id: number) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onDelete, onToggleVisibility, onEdit }) => {
    const theme = useTheme();
    const router = useRouter();

    const handleRowClick = (productId: number) => {
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
                        <TableCell>Visibility</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product, index) => (
                        <TableRow
                            key={product.id}
                            sx={{ cursor: 'pointer' }}
                            onClick={() => handleRowClick(product.id)}
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
                            <TableCell>{product.isVisible ? 'Visible' : 'Hidden'}</TableCell>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    {product.isVisible ? (
                                        <VisibilityIcon
                                            sx={{
                                                mr: 1,
                                                color: theme.palette.primary.main,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onToggleVisibility(product.id);
                                            }}
                                        />
                                    ) : (
                                        <VisibilityOffIcon
                                            sx={{
                                                mr: 1,
                                                color: theme.palette.grey[500],
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onToggleVisibility(product.id);
                                            }}
                                        />
                                    )}
                                    <EditIcon
                                        sx={{
                                            mr: 1,
                                            color: theme.palette.primary.main,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onEdit(product.id);
                                        }}
                                    />
                                    <DeleteIcon
                                        sx={{
                                            color: theme.palette.error.main,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onDelete(product.id);
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