import { StatHelpText } from "@chakra-ui/react";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Modal } from "reactstrap";

import DateRangePicker from "./DateRangePicker";

export default function CustomTuiModal({
  isOpen = false,
  toggle,
  onSubmit,
  submitText = "Save",
  calendars = [],
  attendees = [],
  schedule,
  startDate,
  endDate
}) {
  const [openSelectCalendars, setOpenSelectCalendars] = useState(false);
  const [openSelectAttendees, setOpenSelectAttendees] = useState(false);
  const wrapperSelectCalendarsRef = useRef(null);
  const wrapperSelectAttendeesRef = useRef(null);
  const dateRangePickerRef = useRef(null);
  const subjectRef = useRef(null);

  const [calendarId, setCalendarId] = useState(calendars[0].id);
  const [attendeeId, setAttendeeId] = useState(attendees[0].id);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [State,setState] = useState([])
  console.log(State)
  const handleClick = (e) => {
    if (wrapperSelectCalendarsRef.current?.contains(e.target)) {
      // inside click
      // console.log("inside");
      return;
    }
    if (wrapperSelectAttendeesRef.current?.contains(e.target)) {
      // inside click
      // console.log("inside");
      return;
    }
    // outside click
    // ... do whatever on click outside here ...
    // console.log("outside");
    setOpenSelectCalendars(false);
    setOpenSelectAttendees(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, false);

    return () => {
      document.removeEventListener("click", handleClick, false);
    };
  });

 
  

  useLayoutEffect(() => {
    if (schedule) {
      setCalendarId(schedule.calendarId);
      setAttendeeId(
        attendees.find((element) => schedule.attendees.includes(element.name))
          .id
      );
      setTitle(schedule.title);
      // console.log(schedule.start.toDate(), schedule.end.toDate())
      setStart(schedule.start.toDate());
      setEnd(schedule.end.toDate());
      // dateRangePickerRef.current.setStartDate(schedule.start.toDate());
      // dateRangePickerRef.current.setEndDate(schedule.end.toDate());
    }
    if (startDate && endDate) {
      // dateRangePickerRef.current.setStartDate(startDate.toDate());
      // dateRangePickerRef.current.setEndDate(endDate.toDate());
    }
    return () => {};
  }, [schedule, startDate, endDate]);

  function reset() {
    setCalendarId(calendars[0].id);
    setAttendeeId(attendees[0].id);
    setTitle("");
    setStart(new Date());
    setEnd(new Date());
    dateRangePickerRef.current.setStartDate(new Date());
    dateRangePickerRef.current.setEndDate(new Date());
  }
    
  return (
    <Modal
      isOpen={isOpen}
      toggle={() => {
        toggle();
        reset();
      }}
      centered
    >
      <div className="tui-full-calendar-popup-container">
        <div style={{ display: "flex" }}>
          {/* Department */}
          <div
            ref={wrapperSelectCalendarsRef}
            className={`tui-full-calendar-popup-section tui-full-calendar-dropdown tui-full-calendar-close tui-full-calendar-section-calendar ${
              openSelectCalendars && "tui-full-calendar-open"
            }`}
          >
            <button
              onClick={() => setOpenSelectCalendars(!openSelectCalendars)}
              className="tui-full-calendar-button tui-full-calendar-dropdown-button tui-full-calendar-popup-section-item"
            >
              <span
                className="tui-full-calendar-icon tui-full-calendar-calendar-dot"
                style={{
                  backgroundColor: calendars.find(
                    (element) => element.id === calendarId
                  ).bgColor
                }}
              />
              <span
                id="tui-full-calendar-schedule-calendar"
                className="tui-full-calendar-content"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {calendars.find((element) => element.id === calendarId).name}
              </span>
              <span className="tui-full-calendar-icon tui-full-calendar-dropdown-arrow" />
            </button>
            <ul
              className="tui-full-calendar-dropdown-menu"
              style={{ zIndex: 1004 }}
            >
              {calendars.map((element, i) => (
                <li
                  onClick={() => {
                    setCalendarId(element.id);
                    setOpenSelectCalendars(false);
                  }}
                  key={i}
                  className="tui-full-calendar-popup-section-item tui-full-calendar-dropdown-menu-item"
                  data-calendar-id={element.id}
                >
                  <span
                    className="tui-full-calendar-icon tui-full-calendar-calendar-dot"
                    style={{ backgroundColor: element.bgColor }}
                  />
                  <span className="tui-full-calendar-content">
                    {element.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <span className="tui-full-calendar-section-date-dash">-</span>
          {/* Staff */}
          <div
            ref={wrapperSelectAttendeesRef}
            className={`tui-full-calendar-popup-section tui-full-calendar-dropdown tui-full-calendar-close tui-full-calendar-section-state ${
              openSelectAttendees && "tui-full-calendar-open"
            }`}
          >
            <button
              onClick={() => setOpenSelectAttendees(!openSelectAttendees)}
              className="tui-full-calendar-button tui-full-calendar-dropdown-button tui-full-calendar-popup-section-item"
            >
              <span className="tui-full-calendar-icon tui-full-calendar-ic-state" />
              <span
                id="tui-full-calendar-schedule-state"
                className="tui-full-calendar-content"
              >
                {attendees.find((element) => element.id === attendeeId).name}
              </span>
              <span className="tui-full-calendar-icon tui-full-calendar-dropdown-arrow" />
            </button>
            <ul
              className="tui-full-calendar-dropdown-menu"
              style={{ zIndex: 1004 }}
            >
              {attendees.map((element, i) => (
                <li
                  onClick={() => {
                    setAttendeeId(element.id);
                    setOpenSelectAttendees(false);
                  }}
                  key={i}
                  className="tui-full-calendar-popup-section-item tui-full-calendar-dropdown-menu-item"
                >
                  <span className="tui-full-calendar-icon tui-full-calendar-none" />
                  <span className="tui-full-calendar-content">
                    {element.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Subject */}
        <div className="tui-full-calendar-popup-section">
          <div className="tui-full-calendar-popup-section-item tui-full-calendar-section-location">
            <span className="tui-full-calendar-icon tui-full-calendar-ic-title" />
            <input
              ref={subjectRef}
              id="tui-full-calendar-schedule-title"
              className="tui-full-calendar-content"
              placeholder="Subject"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="tui-full-calendar-popup-section">
          <DateRangePicker
            ref={dateRangePickerRef}
            date={new Date()}
            start={start}
            end={end}
            format="yyyy/MM/dd HH:mm"
            timePicker={{
              layoutType: "tab",
              inputType: "spinbox"
            }}
            onChange={(e) => {
              // console.log(e[0], e[1])
              setStart(e[0]);
              setEnd(e[1]);
            }}
            // language="ko"
          />
        </div>

        <button
          onClick={() => {
            toggle();
            // reset()
          }}
          className="tui-full-calendar-button tui-full-calendar-popup-close"
        >
          <span className="tui-full-calendar-icon tui-full-calendar-ic-close" />
        </button>
        <div className="tui-full-calendar-section-button-save">
          <button
            onClick={() => {
              if (!subjectRef.current.value) {
                subjectRef.current.focus();
              } else {
                const event = {
                  calendarId,
                  attendeeId,
                  attendees: attendees
                    .filter((element) => element.id === attendeeId)
                    .map(({ name, ...rest }) => name),
                  title,
                  start,
                  end,
                  ...calendars.find((element) => element.id === calendarId)
                };
                setState({submitText,calendarId,
                  attendeeId, title,
                  start,
                  end,calendars})
                onSubmit(event);
              }
              
            }}
       
            className="tui-full-calendar-button tui-full-calendar-confirm tui-full-calendar-popup-save"
          >
            <span>{submitText}</span>
          </button>
        </div>
      </div>
    </Modal>
  );
}
