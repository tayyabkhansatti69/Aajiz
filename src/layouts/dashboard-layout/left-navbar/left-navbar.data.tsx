//======================================================================================
// ICONS imports
import AccountsIcons from "@/src/assets/icons/left-navbar-icons/accounts-icons";

import HomeIcons from "@/src/assets/icons/left-navbar-icons/home-icons";
import InvestmentsIcons from "@/src/assets/icons/left-navbar-icons/investments-icons";
import TransactionIcon from "@/src/assets/icons/left-navbar-icons/transaction-icon";
// import TransactionsIcons from "@/assets/icons/left-navbar-icons/transactions-icons";
import IconSetting from "@/src/assets/icons/dashboard-main/icon-setting";
// import IconMassage from "@/src/assets/icons/dashboard-main/Icon-massage";
import IconChat from "@/src/assets/icons/dashboard-main/icon-chat";

import IconQuestionBank from "@/src/assets/icons/dashboard-main/icon-question-bank";

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
    icon: IconSetting,
    link: "/schedule",
  },

];
export const NavListDataStudent = [
  {
    label: "Dashboard",
    icon: HomeIcons,
    link: "/dashboard",
  },
  {
    label: "My Lesson",
    icon: AccountsIcons,
    link: "/schedule",
  },
  {
    label: "Schedule",
    icon: AccountsIcons,
    link: "/schedule",
  },
  {
    label: 'message',
    icon: IconChat,
    link: '/message'
  },
  {
    label: "Settings",
    icon: IconSetting,
    link: "/settings",
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