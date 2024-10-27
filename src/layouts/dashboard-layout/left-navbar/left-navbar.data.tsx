//======================================================================================
// ICONS imports
import AccountsIcons from "@/src/assets/icons/left-navbar-icons/accounts-icons";

import HomeIcons from "@/src/assets/icons/left-navbar-icons/home-icons";
import InvestmentsIcons from "@/src/assets/icons/left-navbar-icons/investments-icons";
import TransactionIcon from "@/src/assets/icons/left-navbar-icons/transaction-icon";
// import TransactionsIcons from "@/assets/icons/left-navbar-icons/transactions-icons";
import IconSetting from "@/src/assets/icons/dashboard-main/icon-setting";
// import IconMassage from "@/src/assets/icons/dashboard-main/Icon-massage";

import IconQuestionBank from "@/src/assets/icons/dashboard-main/icon-question-bank";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
//==========================================================================================
// CONST
export const NavListData = [
  {
    label: "Home",
    icon: HomeIcons,
    link: "/dashboard",
  },
  {
    label: "Transaction",
    icon: IconSetting,
    link: "/transaction",
  },
  {
    label: "Setting",
    icon: IconSetting,
    link: "/setting",
  },
  {
    label: "Logout",
    icon: LogoutIcon,
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
    label: "Transaction",
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
    link: "/setting",
  },
  {
    label: "Logout",
    icon: LogoutIcon,
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
    label: "User Managment",
    icon: HomeIcons,
    link: "/dashboard",
  },
  {
    label: "Transaction",
    icon: TransactionIcon,
    link: "/transaction",
  },
  {
    label: "Question bank",
    icon: IconQuestionBank,
    link: "/questionbank",
  },
  {
    label: "Schedule",
    icon: AccountsIcons,
    link: "/schedule",
  },
  {
    label: "Notification",
    icon: InvestmentsIcons,
    link: "/students",
  },
  {
    label: "Settings",
    icon: IconSetting,
    link: "/settings",
  },
];
