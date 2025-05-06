
import React from 'react';
import { Form } from 'react-bootstrap';
import './netBanking.css';
import assests from '../../assets/assets';



const BANKS = [
  { id: 'SBI',   label: 'State Bank of India',        icon: assests.unionBankIcon },
  { id: 'HDFC',  label: 'HDFC Bank',                   icon: assests.unionBankIcon},
  { id: 'ICICI', label: 'ICICI Bank',                  icon: assests.unionBankIcon},
  { id: 'KOTAK', label: 'Kotak Mahindra Bank',         icon: assests.unionBankIcon},
  { id: 'AXIS',  label: 'Axis Bank',                   icon: assests.unionBankIcon},
  { id: 'FED',   label: 'Federal Bank',                icon: assests.unionBankIcon},
  { id: 'IOB',   label: 'Indian Overseas Bank',        icon: assests.unionBankIcon},
  { id: 'IB',    label: 'Indian Bank',                 icon: assests.unionBankIcon},
];

export default function PopularBanks({ selectedBank, onChange }) {
  return (
    <div className="popular-banks-wrapper">
      <h5 className="mb-3">Popular Banks</h5>
      <Form>
        <div className="popular-banks-grid">
          {BANKS.map(bank => (
            <Form.Check key={bank.id} type="radio" id={bank.id} className="bank-option">
              <Form.Check.Input
                name="bank"
                type="radio"
                checked={selectedBank === bank.id}
                onChange={() => onChange(bank.id)}
              />
              <Form.Check.Label htmlFor={bank.id}>
                <img src={bank.icon} alt={bank.label} className="bank-icon" />
                <span className="bank-label">{bank.label}</span>
              </Form.Check.Label>
            </Form.Check>
          ))}
        </div>
      </Form>
    </div>
  );
}
