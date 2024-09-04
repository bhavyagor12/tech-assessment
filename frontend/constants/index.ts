import badgeIcon from "../public/badges.svg";
import discordOG from "../public/discord_og.svg";
import incomeEngineer from "../public/Income_engineer.svg";
import pudgyOG from "../public/Pudgy.svg";
import pathfinderOG from "../public/Pathfinder.svg";
import rookieBadge from "../public/Rookie.svg";

export const TABS = [
  { title: "Dashboard", link: "/" },
  { title: "Tasks", link: "/" },
  { title: "Badges", link: "/" },
  { title: "Leaderboard", link: "/" },
  { title: "Connections", link: "/" },
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

export const COMMUNITY_BADGES = [
  {
    title: "Discord OG",
    actions: null,
    icon: discordOG,
    value: "1.15x",
    isActive: true,
    details: "Liquidity Provision to ETH/USDC",
  },
  {
    title: "Liquidity Machine",
    actions: "3 Actions",
    icon: badgeIcon,
    value: "1.15x",
    details: "Liquidity Provision to ETH/USDC",
  },
  {
    title: "Income Engineer",
    actions: "3 Actions",
    icon: incomeEngineer,
    value: "2x",
    details: "Liquidity Provision to ETH/USDC",
  },
  {
    title: "Pudgy OG",
    actions: null,
    icon: pudgyOG,
    value: "200 Points",
    details: "Liquidity Provision to ETH/USDC",
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
    details: "Liquidity Provision to ETH/USDC",
  },
  {
    title: "Liquidity Machine",
    actions: "3 Actions",
    icon: badgeIcon,
    value: "1.15x",
    details: "Liquidity Provision to ETH/USDC",
  },
  {
    title: "Income Engineer",
    actions: "3 Actions",
    icon: incomeEngineer,
    value: "2x",
    details: "Liquidity Provision to ETH/USDC",
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
    details: "Liquidity Provision to ETH/USDC",
  },
];
