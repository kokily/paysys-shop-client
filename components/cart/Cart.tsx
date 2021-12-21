import type { ChangeEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles';
import RemoveModal from '../common/RemoveModal';
import CartButtons from './common/CartButtons';
import CartTop from './common/CartTop';
import TotalAmount from './common/TotalAmount';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-bottom: 6rem;
  ${media.xsmall} {
    width: 100%;
    padding: 0.2rem;
  }
`;

const Form = styled.form`
  margin-top: 1rem;
  .center {
    width: 350px;
  }
  button {
    float: right;
  }
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 30px;
  label {
    position: absolute;
    color: #212529;
    top: 12px;
    left: 0;
    transition: 0.2s ease all;
  }
  .bar {
    position: relative;
    display: block;
    width: 100%;
    &:before {
      content: '';
      position: absolute;
      left: 50%;
      right: 50%;
      bottom: 0;
      background: #0c8599;
      height: 3px;
      transition: left 0.2s ease-out, right 0.2s ease-out;
    }
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #15aabf;
  padding: 10px;
  display: block;
  width: 92%;
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    top: -10px;
    font-size: 14px;
    color: #12b886;
  }
  &:focus ~ .bar:before {
    left: 0;
    right: 0;
  }
`;

interface Props {
  title: string;
  hall: string;
  etc: string;
  cart: CartType | null;
  totalAmount: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddBill: (e: MouseEvent) => void;
  onRemoveOne: (id: string, name: string) => void;
  modal: boolean;
  onRemoveClick: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const Cart: React.FC<Props> = ({
  title,
  hall,
  etc,
  cart,
  totalAmount,
  onChange,
  onAddBill,
  onRemoveOne,
  modal,
  onRemoveClick,
  onCancel,
  onConfirm,
}) => {
  return (
    <Container>
      <CartTop cart={cart} onRemoveOne={onRemoveOne} />

      <TotalAmount totalAmount={totalAmount} />

      <Form>
        <div className="center">
          <InputGroup>
            <Input type="text" name="title" value={title} onChange={onChange} required />
            <span className="bar" />
            <label htmlFor="title">
              행사명 <small>(필수)</small>
            </label>
          </InputGroup>

          <InputGroup>
            <Input type="text" name="hall" value={hall} onChange={onChange} required />
            <span className="bar" />
            <label htmlFor="hall">
              장소 <small>(필수)</small>
            </label>
          </InputGroup>

          <InputGroup>
            <Input type="text" name="etc" value={etc} onChange={onChange} required />
            <span className="bar" />
            <label htmlFor="etc">기타사항</label>
          </InputGroup>
        </div>

        <CartButtons onSubmit={onAddBill} onRemoveClick={onRemoveClick} />
      </Form>

      <RemoveModal visible={modal} onCancel={onCancel} onConfirm={onConfirm} />
    </Container>
  );
};

export default Cart;
