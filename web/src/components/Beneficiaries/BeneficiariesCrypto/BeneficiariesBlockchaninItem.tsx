import * as React from 'react';

export interface BeneficiariesBlockchaninItemProps {
    blockchainKey: string;
    estimatedValue: string;
    protocol: string;
    name: string;
    id: string;
    fee: string;
    minWithdraw: string;
}

export const BeneficiariesBlockchaninItem = (props: BeneficiariesBlockchaninItemProps) => {
    const { estimatedValue, protocol, name, id, fee, minWithdraw } = props;

    return (
        <div className="cr-beneficiaries-blockchain-item">
            <div>
                <h3>{protocol}</h3>
                <div>{`${name} (${id.toUpperCase()})`}</div>
                <div>Network Fee {fee} {id.toUpperCase()}</div>
            </div>
            <div>
                <div>Min. withdraw: {minWithdraw} {id.toUpperCase()}</div>
                <div>≈{estimatedValue} USDT</div>
            </div>
        </div>
    );
}