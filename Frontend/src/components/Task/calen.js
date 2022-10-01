import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import CustomTuiCalendar from "./CustomTuiCalendar";
import CustomTuiModal from "./CustomTuiModal";

const start = new Date();
const end = new Date(new Date().setMinutes(start.getMinutes() + 60));
const attendees = [
  {
    id: "1",
    name: "Albert"
  },
  { id: "2", name: "Ankush" },
  { id: "3", name: "Varun" },
  { id: "4", name: "Raj" }
];
const schedules = [
//   {
//     id: "1",
//     title: "Mua nuoc dum",
//     calendarId: "1",
//     category: "time",
//     attendees: ["Chin"],
//     isVisible: true,
//     start,
//     end
//   },
//   {
//     id: "2",
//     title: "Di lau nha",
//     calendarId: "2",
//     category: "time",
//     attendees: ["Khanh"],
//     isVisible: true,
//     start: new Date(new Date().setHours(start.getHours() + 1)),
//     end: new Date(new Date().setHours(start.getHours() + 2))
//   },
//   {
//     id: "3",
//     title: "Di don phong",
//     calendarId: "3",
//     category: "time",
//     attendees: ["Hai"],
//     isVisible: true,
//     start: new Date(new Date().setHours(start.getHours() + 2)),
//     end: new Date(new Date().setHours(start.getHours() + 4))
//   },
//   {
//     id: "4",
//     title: "Phai lam sao day",
//     calendarId: "4",
//     category: "time",
//     attendees: ["Linh"],
//     isVisible: true,
//     start: new Date(new Date().setHours(start.getHours() + 2)),
//     end: new Date(new Date().setHours(start.getHours() + 6))
//   }
];

const colors = [
  {
    id: "1",
    color: "#ffffff",
    bgColor: "#34C38F",
    dragBgColor: "#34C38F",
    borderColor: "#34C38F"
  },
  {
    id: "2",
    color: "#ffffff",
    bgColor: "#F4696A",
    dragBgColor: "#F4696A",
    borderColor: "#F4696A"
  },
  {
    id: "3",
    color: "#ffffff",
    bgColor: "#00a9ff",
    dragBgColor: "#00a9ff",
    borderColor: "#00a9ff"
  },
  {
    id: "4",
    color: "#ffffff",
    bgColor: "#F2B34C",
    dragBgColor: "#F2B34C",
    borderColor: "#F2B34C"
  },
  {
    id: "5",
    color: "#ffffff",
    bgColor: "#74788D",
    dragBgColor: "#74788D",
    borderColor: "#74788D"
  },
  {
    id: "6",
    color: "#ffffff",
    bgColor: "#343A40",
    dragBgColor: "#343A40",
    borderColor: "#343A40"
  },
  {
    id: "7",
    color: "#000000",
    bgColor: "#FFFFFF",
    dragBgColor: "#FFFFFF",
    borderColor: "#FFFFFF"
  }
];

const calendars = [
  {
    id: "1",
    name: "BPA Technical"
  },
  {
    id: "2",
    name: "Aqua 2 Cleaning"
  },
  {
    id: "3",
    name: "Aqua 4 Cleaning"
  },
  {
    id: "4",
    name: "Luxury 6 Cleaning"
  },
  {
    id: "5",
    name: "Luxury 6 Management"
  },
  {
    id: "6",
    name: "Aqua 3 Management"
  },
  {
    id: "7",
    name: "Aqua 2 Management"
  }
];

export default function Candle() {
  const [modal, setModal] = useState(false);
  const [event, setEvent] = useState(null);
  const childRef = useRef();
  console.log(event)
  const toggle = () => {
    setModal(!modal);
    setEvent(null);
  };

  function onBeforeCreateSchedule(event) {
    // console.log('onBeforeCreateSchedule', event)
    event.guide.clearGuideElement();
    setModal(true);
    setEvent(event);
  }

  function handleCreateSchedule(newEvent) {
    // call api
    const result = true;

    if (result) {
      const newSchedule = {
        ...event,
        id: schedules.length,
        title: newEvent.title,
        calendarId: newEvent.calendarId,
        category: event.isAllDay ? "allday" : "time",
        attendees: newEvent.attendees,
        isVisible: true,
        start: newEvent.start,
        end: newEvent.end,

        isAllDay: event.isAllDay,
        dueDateClass: "",
        location: event.location,
        // raw: {
        //   class: event.raw["class"]
        // },
        state: event.state,
        body: event.body
      };

      childRef.current.createSchedule(newSchedule);
      setModal(false);
    }
  }

  function onBeforeUpdateSchedule(event) {
    // console.log('onBeforeUpdateSchedule', event)

    const { schedule, changes } = event;

    // resize & drag n drop
    if (changes) {
      // call api
      const result = true;
      if (result) {
        return childRef.current.updateSchedule(schedule, changes);
      }
    }

    setModal(true);
    setEvent(event);
  }

  async function handleUpdateSchedule(updateEvent) {
    // call api
    const result = true;

    if (result) {
      const { schedule } = event;

      // way 1: library not support
      // update api fail with attendees
      // childRef.current.updateSchedule(schedule, updateEvent)

      // way 2: stupid
      await childRef.current.deleteSchedule(schedule);

      const newSchedule = {
        ...event,
        id: schedules.length + 2,
        title: updateEvent.title,
        calendarId: updateEvent.calendarId,
        category: event.isAllDay ? "allday" : "time",
        attendees: updateEvent.attendees,
        isVisible: true,
        start: updateEvent.start,
        end: updateEvent.end,

        isAllDay: event.isAllDay,
        dueDateClass: "",
        location: event.location,
        // raw: {
        //   class: event.raw["class"]
        // },
        state: event.state,
        body: event.body
      };

      await childRef.current.createSchedule(newSchedule);

      setModal(false);
    }
  }

  function onBeforeDeleteSchedule(event) {
    // console.log('onBeforeDeleteSchedule', event)

    // call api
    const result = true;

    if (result) {
      const { schedule } = event;
      childRef.current.deleteSchedule(schedule);
    }

    return true;
  }

  const formatCalendars = calendars.map((element) => ({
    ...colors.find((element2) => element2.id === element.id),
    ...element
  }));

  return (
    <div>
      <CustomTuiCalendar
        ref={childRef}
        {...{
          isReadOnly: false,
          showSlidebar: true,
          showMenu: true,
          useCreationPopup: false,
          // onCreate: () => {
          //   console.log("create that!!!");
          //   childRef.current.getAlert();
          // },
          // createText: "Tao moi",
        //   calendars: formatCalendars,
          schedules,
          onBeforeCreateSchedule,
          onBeforeUpdateSchedule,
          onBeforeDeleteSchedule
        }}
      />
      <CustomTuiModal
        {...{
          isOpen: modal,
          toggle,
          onSubmit:
            event?.triggerEventName === "mouseup"
              ? handleCreateSchedule
              : handleUpdateSchedule,
          submitText: event?.triggerEventName === "mouseup" ? "Save" : "Update",
          calendars: formatCalendars,
          attendees,
          schedule: event?.schedule,
          startDate: event?.start,
          endDate: event?.end
        }}
      />
    </div>
  );
}
