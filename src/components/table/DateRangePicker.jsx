'use client';
import React, { useState, useRef } from 'react';
import { DateRangePicker } from 'react-date-range';
import { FaCalendarAlt } from "react-icons/fa";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateRangeSelector = ({ defaultStyle }) => {
  const [startDate, setStartDate] = useState(new Date('2024-02-01'));
  const [endDate, setEndDate] = useState(new Date('2024-03-01'));
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleSelect = (ranges) => {
    console.log(ranges, 'ranges');
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    setShowModal(false);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  const showModalHandler = () => {
    if(defaultStyle) setShowModal(true)
  }

  return (
    <div>
      <div
        className="input-container py-2 px-4 rounded-lg shadow-sm cursor-pointer"
        onClick={showModalHandler}
      >
      {!defaultStyle ?
        <>
          <span className="font-semibold"><span className='border-r-4 py-1 rounded-l-lg mr-2 border-red-500'></span>Periode:&nbsp;</span>
          <span className='text-gray-500'>{startDate.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
          <span>&nbsp;-&nbsp;</span>
          <span className='text-gray-500'>{endDate.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
        </>
      :
        <span className='flex text-gray-500 items-center gap-x-6'>Pilih Periode  <FaCalendarAlt /> </span> 
      }
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleClickOutside}>
          <div className="modal-container" ref={modalRef}>
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              months={2}
              direction="horizontal"
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              showDateDisplay={false}
              showMonthAndYearPickers={false}
              staticRanges={[]}
              inputRanges={[]}
              minDate={new Date('2024-01-01')}
              maxDate={new Date('2024-12-31')}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangeSelector;