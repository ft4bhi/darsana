// src/components/scholarship/client/BankDetails.tsx

import React from 'react';
import { InputField } from './InputField';

export interface BankDetailsType {
    ifsc: string;
    bankName: string;
    branchName: string;
    accountNumber: string;
    accountHolder: string;
}

export const BankDetails: React.FC<{
    bankDetails: BankDetailsType;
    setBankDetails: React.Dispatch<React.SetStateAction<BankDetailsType>>;
}> = ({ bankDetails, setBankDetails }) => {

    const handleChange = (field: keyof BankDetailsType, value: string) => {
        setBankDetails(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <div className="grid grid-cols-1 gap-4">
            <InputField
                label="IFSC Code"
                required
                value={bankDetails.ifsc}
                onChange={(e) => handleChange('ifsc', e.target.value)}
            />
            <InputField
                label="Bank Name"
                required
                value={bankDetails.bankName}
                onChange={(e) => handleChange('bankName', e.target.value)}
            />
            <InputField
                label="Branch Name"
                required
                value={bankDetails.branchName}
                onChange={(e) => handleChange('branchName', e.target.value)}
            />
            <InputField
                label="Account Number"
                required
                value={bankDetails.accountNumber}
                onChange={(e) => handleChange('accountNumber', e.target.value)}
            />
            <InputField
                label="Account Holder"
                required
                value={bankDetails.accountHolder}
                onChange={(e) => handleChange('accountHolder', e.target.value)}
            />
        </div>
    );
};
