import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AddExpensePayload } from '../../libs/types';
import ExpenseTemplate from './common/ExpenseTemplate';
import ExpenseInput from './common/ExpenseInput';
import Event from './detail/Event';
import Hanbok from './detail/Hanbok';
import Meal from './detail/Meal';
import Present from './detail/Present';
import Reserve from './detail/Reserve';
import Prepayment from './detail/Prepayment';
import Convention from './detail/Convention';
import Company from './detail/Company';

// Styles
const NameContainer = styled.div`
  display: float;
  h3 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
`;

const DateContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  .react-datepicker-wrapper {
    width: auto;
  }
  input {
    width: 95px;
    height: 25px;
    border: 2px solid #1098ad;
    background: #22b8cf;
    color: white;
    border-radius: 3px;
    text-align: center;
    margin-right: 10px;
  }
  select {
    width: 95px;
    height: 25px;
    border: 2px solid #0ca678;
    background: #20c997;
    color: white;
    border-radius: 3px;
    text-align: center;
    margin-right: 10px;
  }
`;

interface Props {
  edit?: boolean;
  expense: AddExpensePayload;
}

const AddExpense: React.FC<Props> = ({ edit, expense }) => {
  return (
    <ExpenseTemplate onList={expense.onList} onSubmit={expense.onAddExpense} edit={edit}>
      <>
        <NameContainer>
          <span>신랑님: </span>
          <strong>
            <ExpenseInput
              name="husband_name"
              value={expense.husband_name}
              onChange={expense.onChange}
            />
          </strong>

          <span>신부님: </span>
          <strong>
            <ExpenseInput
              name="bride_name"
              value={expense.bride_name}
              onChange={expense.onChange}
            />
          </strong>
        </NameContainer>

        <DateContainer>
          <span>웨딩일자: </span>
          <DatePicker
            locale="ko"
            startDate={expense.wedding_at}
            selected={expense.wedding_at}
            onChange={expense.setStartDate as any}
            dateFormat="yyyy, MM dd"
          />

          <span>웨딩시간: </span>
          <select name="event_at" value={expense.event_at} onChange={expense.onChange}>
            <option value="">전체</option>
            <option value="11:30">11:30</option>
            <option value="13:00">13:00</option>
            <option value="14:30">14:30</option>
            <option value="16:00">16:00</option>
            <option value="17:30">17:30</option>
            <option value="19:00">19:00</option>
          </select>
        </DateContainer>

        <hr style={{ width: '90%' }} />
      </>

      <Convention
        rental_husband={expense.rental_husband}
        rental_bride={expense.rental_bride}
        sword_husband={expense.sword_husband}
        sword_bride={expense.sword_bride}
        glove_husband={expense.glove_husband}
        glove_bride={expense.glove_bride}
        bouquet_husband={expense.bouquet_husband}
        bouquet_bride={expense.bouquet_bride}
        ceremony_husband={expense.ceremony_husband}
        ceremony_bride={expense.ceremony_bride}
        onChange={expense.onChange}
      />
      <Company
        company_husband={expense.company_husband}
        company_bride={expense.company_bride}
        rooftop_husband={expense.rooftop_husband}
        rooftop_bride={expense.rooftop_bride}
        owner_woman_husband={expense.owner_woman_husband}
        owner_woman_bride={expense.owner_woman_bride}
        owner_man_husband={expense.owner_man_husband}
        owner_man_bride={expense.owner_man_bride}
        select_husband={expense.select_husband}
        select_bride={expense.select_bride}
        frame_husband={expense.frame_husband}
        frame_bride={expense.frame_bride}
        dress_husband={expense.dress_husband}
        dress_bride={expense.dress_bride}
        hairpin_husband={expense.hairpin_husband}
        hairpin_bride={expense.hairpin_bride}
        wig_husband={expense.wig_husband}
        wig_bride={expense.wig_bride}
        video_husband={expense.video_husband}
        video_bride={expense.video_bride}
        etc_husband={expense.etc_husband}
        etc_bride={expense.etc_bride}
        onChange={expense.onChange}
      />

      <Event
        play_husband={expense.play_husband}
        play_bride={expense.play_bride}
        anthem_husband={expense.anthem_husband}
        anthem_bride={expense.anthem_bride}
        moderator_husband={expense.moderator_husband}
        moderator_bride={expense.moderator_bride}
        officiate_husband={expense.officiate_husband}
        officiate_bride={expense.officiate_bride}
        onChange={expense.onChange}
      />

      <Hanbok
        hanbok_pre_husband={expense.hanbok_pre_husband}
        hanbok_pre_bride={expense.hanbok_pre_bride}
        hanbok_post_husband={expense.hanbok_post_husband}
        hanbok_post_bride={expense.hanbok_post_bride}
        onChange={expense.onChange}
      />

      <Meal
        meals={expense.meals}
        meals_price={expense.meals_price}
        meals_num_husband={expense.meals_num_husband}
        meals_num_bride={expense.meals_num_bride}
        onChange={expense.onChange}
      />

      <Present
        present={expense.present}
        present_price={expense.present_price}
        present_num_husband={expense.present_num_husband}
        present_num_bride={expense.present_num_bride}
        onChange={expense.onChange}
      />

      <Reserve
        reserve={expense.reserve}
        reserve_pay={expense.reserve_pay}
        onChange={expense.onChange}
      />

      <Prepayment
        prepayment_husband={expense.prepayment_husband}
        prepayment_bride={expense.prepayment_bride}
        onChange={expense.onChange}
      />
    </ExpenseTemplate>
  );
};

export default AddExpense;
