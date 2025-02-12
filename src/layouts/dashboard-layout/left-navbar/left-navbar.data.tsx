//======================================================================================
// ICONS imports
// import AccountsIcons from "@/src/assets/icons/left-navbar-icons/accounts-icons";

import HomeIcons from "@/src/assets/icons/left-navbar-icons/home-icons";
import InvestmentsIcons from "@/src/assets/icons/left-navbar-icons/investments-icons";
import TransactionIcon from "@/src/assets/icons/left-navbar-icons/transaction-icon";
// import TransactionsIcons from "@/assets/icons/left-navbar-icons/transactions-icons";
import IconSetting from "@/src/assets/icons/dashboard-main/icon-setting";
// import IconMassage from "@/src/assets/icons/dashboard-main/Icon-massage";

// import IconQuestionBank from "@/src/assets/icons/dashboard-main/icon-question-bank";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import LogoutIcon from "@mui/icons-material/Logout";
import LogOutIcon from "@/src/assets/icons/logout-icons";
import StampIcons from "@/src/assets/icons/left-navbar-icons/stamp-icon";
//==========================================================================================
// CONST
export const NavListData = [
  {
    label: "Home",
    icon: HomeIcons,
    link: "/dashboard",
  },
  {
    label: "Transactions",
    icon: MonetizationOnOutlinedIcon,
    link: "/transaction",
  },
  {
    label: "Settings",
    icon: SettingsOutlinedIcon,
    link: "/setting",
  },
  {
    label: "Logout",
    icon: LogOutIcon,
    link: "/logout",
  },
];
export const NavListDataStudent = [
  {
    label: "Dashboard",
    icon: HomeIcons,
    link: "/dashboard",
  },
  {
    label: "Add Account",
    icon: SettingsOutlinedIcon,
    link: "/add-account",
  },
  {
    label: "Transactions",
    icon: MonetizationOnOutlinedIcon,
    link: "/transactions",
  },
  {
    label: "Support",
    icon: SettingsOutlinedIcon,
    link: "/support",
  },
  {
    label: "Settings",
    icon: SettingsOutlinedIcon,
    link: "/settings",
  },
  {
    label: "Logout",
    icon: LogOutIcon,
    link: "/logout",
  },
];
export const NavListDataAdmine = [
  {
    label: "Dashboard",
    icon: HomeIcons,
    link: "/dashboard",
  },
  {
    label: "Scanned Stamps",
    icon: StampIcons,
    link: "/scanned-stamps",
  },
  {
    label: "KYC Request",
    icon: TransactionIcon,
    link: "/kyc-requests",
  },
  {
    label: "Card Requests",
    icon: SettingsOutlinedIcon,
    link: "/card-requests",
  },
  {
    label: "Donors",
    icon: SettingsOutlinedIcon,
    link: "/donors",
  },
  {
    label: "Partners",
    icon: SettingsOutlinedIcon,
    link: "/partners",
  },
  {
    label: "Transaction",
    icon: MonetizationOnOutlinedIcon,
    link: "/admin-transactions",
  },
  {
    label: "Withdraw Request",
    icon: InvestmentsIcons,
    link: "/withdraw-requests",
  },
  {
    label: "Create Campaign",
    icon: IconSetting,
    link: "/create-campaigns",
  },
  {
    label: "Queries",
    icon: IconSetting,
    link: "/queries",
  },
  {
    label: "Super Admin",
    icon: IconSetting,
    link: "/super-admin",
  },
  {
    label: "Logout",
    icon: LogOutIcon,
    link: "/logout",
  },
  // {
  //   label: "Logout",
  //   icon: IconSetting,
  //   link: "/settings",
  // },
];
