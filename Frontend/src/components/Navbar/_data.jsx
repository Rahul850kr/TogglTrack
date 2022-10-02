import * as React from "react";
import { IoCalendar, IoGrid } from "react-icons/io5";
import { AiTwotoneCrown, AiTwotonePieChart } from "react-icons/ai";
import { GiReceiveMoney, GiLaptop, GiClick } from "react-icons/gi";
import { FaSearchengin, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { MdGroup } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { RiUser2Fill, RiNumber1 } from "react-icons/ri";

export const links = [
  {
    label: "Product",
    children: [
      {
        label: "Key features",
        description:
          "View features by need, from time tracking to project and team management",
        href: "#",
        icon: <IoGrid />,
      },
      {
        label: "Employee time tracking",
        description:
          "Loved by teams and team leads. Error-free timesheet data and ease of use",
        href: "/employeetime",
        icon: <RiUser2Fill />,
      },
      {
        label: "Billing and invoicing",
        description:
          "Capture every billable minute so you can invoice with ease and precision",
        href: "/billinginvoice",
        icon: <GiReceiveMoney />,
      },
      {
        label: "Payroll",
        description:
          "Calculate payroll for contractors and employees based on accurate data",
        href: "/payroll",
        icon: <IoCalendar />,
      },
      {
        label: "Reporting and transparency",
        description:
          "Get a big picture overview or dig into details with insightful reports",
        href: "/reporting",
        icon: <AiTwotonePieChart />,
      },
      {
        label: "Project budgeting",
        description:
          "Stay on track with budgets and deadlines. Eliminate scope creep and overwork",
        href: "/projectbudget",
        icon: <FiTarget />,
      },
    ],
    title1: "For every need",
    title2: "Track anywhere you like",
    block: {
      text: "Toggl Track stands against employee surveillance. Read our statement here.",
      icon: <BsArrowRight />,
    },
    sideMenu: [
      {
        label: "Web app",
        description: "Full-suite app for time, project and team management",
        href: "#",
        icon: <FaLaptopCode />,
      },
      {
        label: "Mobile apps",
        description: "Time tracking on the go with our iOS and Android apps",
        href: "#",
        icon: <FaMobileAlt />,
      },
      {
        label: "Desktop apps",
        description: "Launch right from your Windows, Mac, or Linux machine",
        href: "#",
        icon: <GiLaptop />,
      },
      {
        label: "100+ integrations",
        description:
          "Explore our native integrations or track time via browser extensions",
        href: "#",
        icon: <GiClick />,
      },
    ],
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "Why Track?",
    children: [
      {
        label: "For freelancers and solo users",
        description: "For solo entrepreneurs with a growing list of clients",
        href: "#",
        icon: <RiNumber1 />,
      },
      {
        label: "For small teams",
        description:
          "For teams of less than 10 that need to track projects and bill clients",
        href: "#",
        icon: <MdGroup />,
      },
      {
        label: "For big teams",
        description:
          "For growing teams that need robust and flexible solutions for time and project tracking",
        href: "#",
        icon: <TbGridDots />,
      },
    ],
    title1: "Time tracking for every team size",
    title2: null,
    block: {
      text: "Track has helped teams across multiple industries increase profitability and productivity, shavings hours off admin. Explore case studies",
      icon: <BsArrowRight />,
    },
  },
  {
    label: "Careers",
    children: [
      {
        label: "Current job openings",
        description:
          "We are hiring! Apply by taking a skills test; no resume or CV required",
        href: "#",
        icon: <FaSearchengin />,
      },
      {
        label: "The Toggl Track Culture",
        description: "Learn more about our mission, vision and values",
        href: "#",
        icon: <AiTwotoneCrown />,
      },
    ],
    title1: "Work on a product that matters to millions",
    title2: null,
  },
];