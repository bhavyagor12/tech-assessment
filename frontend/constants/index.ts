export const TABS = [
  { title: "Dashboard", link: "/" },
  { title: "Tasks", link: "/" },
  { title: "Badges", link: "/" },
  { title: "Leaderboard", link: "/" },
  { title: "Connections", link: "/" },
];

export const ACTIVITIES = [
  {
    activity: "Transaction",
    points: "+560",
    date: "20.06.2024",
    time: "14:10:35",
    txid: "0xa12...1bac",
  },
  {
    activity: "Transaction",
    points: "+560",
    date: "20.06.2024",
    time: "13:47:22",
    txid: "0xa12...1bac",
  },
  {
    activity: "Bridged",
    points: "+262",
    date: "20.06.2024",
    time: "13:40:35",
    txid: "0xa12...1bac",
  },
  {
    activity: "Transaction",
    points: "+194",
    date: "20.06.2024",
    time: "13:47:22",
    txid: "0xa12...1bac",
  },
  {
    activity: "Bridged",
    points: "+155",
    date: "20.06.2024",
    time: "14:10:35",
    txid: "0xa12...1bac",
  },
  {
    activity: "Transaction",
    points: "142",
    date: "20.06.2024",
    time: "13:47:22",
    txid: "0xa12...1bac",
  },
];

export const ACTIVITY_HEADERS = ["Activities", "Points", "Date", "TXID"];

export const ACTION_CARDS = [
  {
    description: "Provide at least $50 Liquidity to USDT/ETH",
    status: true,
  },
  {
    description: "Provide at least $50 Liquidity to LINK/ETH",
    status: false,
  },
  {
    description: "Provide at least $50 Liquidity to UNI/ETH",
    status: false,
  },
];

import badgeIcon from "../public/badges.svg";
import discordOG from "../public/discord_og.svg";
import incomeEngineer from "../public/Income_engineer.svg";
import pudgyOG from "../public/Pudgy.svg";
import pathfinderOG from "../public/Pathfinder.svg";
import rookieBadge from "../public/Rookie.svg";

export const COMMUNITY_BADGES = [
  {
    title: "Discord OG",
    actions: null,
    icon: discordOG,
    value: "1.15x",
    isActive: true,
  },
  {
    title: "Liquidity Machine",
    actions: "3 Actions",
    icon: badgeIcon,
    value: "1.15x",
  },
  {
    title: "Income Engineer",
    actions: "3 Actions",
    icon: incomeEngineer,
    value: "2x",
  },
  {
    title: "Pudgy OG",
    actions: null,
    icon: pudgyOG,
    value: "200 Points",
  },
  {
    title: "Pathfinder OG",
    actions: null,
    icon: pathfinderOG,
    value: "1.15x",
    details: "Liquidity Provision to ETH/USDC",
  },
  {
    title: "Rookie Badge",
    actions: "1 Action",
    icon: rookieBadge,
    value: "150 Points",
  },
  {
    title: "Liquidity Machine",
    actions: "3 Actions",
    icon: badgeIcon,
    value: "1.15x",
  },
  {
    title: "Income Engineer",
    actions: "3 Actions",
    icon: incomeEngineer,
    value: "2x",
  },
  {
    title: "Pathfinder OG",
    actions: null,
    icon: pathfinderOG,
    value: "1.15x",
  },
  {
    title: "Rookie Badge",
    actions: "1 Action",
    icon: rookieBadge,
    value: "150 Points",
  },
];
