//======================================================================================
// ICONS imports
import AccountsIcons from "@/src/assets/icons/left-navbar-icons/accounts-icons";
import CreditCardsIcons from "@/src/assets/icons/left-navbar-icons/credit-cards-icons";
import HomeIcons from "@/src/assets/icons/left-navbar-icons/home-icons";
import InvestmentsIcons from "@/src/assets/icons/left-navbar-icons/investments-icons";
import TransactionIcon from "@/src/assets/icons/left-navbar-icons/transaction-icon";
// import TransactionsIcons from "@/assets/icons/left-navbar-icons/transactions-icons";
import IconSetting from "@/src/assets/icons/dashboard-main/icon-setting";
// import IconMassage from "@/src/assets/icons/dashboard-main/Icon-massage";
import IconChat from "@/src/assets/icons/dashboard-main/icon-chat";
import LiveClassIcon from "@/src/assets/icons/left-navbar-icons/live-class-icons";
import IconExam from "@/src/assets/icons/dashboard-main/icon-exam";
import IconQuestionBank from "@/src/assets/icons/dashboard-main/icon-question-bank";
import IconCourses from "@/src/assets/icons/dashboard-main/icon-courses";
//==========================================================================================
// CONST
export const NavListData = [
  {
    label: "Dashboard",
    icon: HomeIcons,
    link: "/dashboard",
  },
  {
    label: "Schedule",
    icon: AccountsIcons,
    link: "/schedule",
  },
  {
    label: "Students",
    icon: InvestmentsIcons,
    link: "/students",
  },
  {
    label: "Courses",
    icon: IconCourses,
    link: "/courses",
  },
  {
    label: "Resources",
    icon: CreditCardsIcons,
    link: "/resources",
  },
  {
    label: "Transaction",
    icon: TransactionIcon,
    link: "/transaction",
  },
  {
    label: 'Live Classes',
    icon: LiveClassIcon,
    link: '/liveclass'
  },

  {
    label: 'Exam',
    icon: IconExam,
    link: '/exam'
  },
  {
    label: 'message',
    icon: IconChat,
    link: '/message'
  },
  {
    label: "Question bank",
    icon: IconQuestionBank,
    link: "/questionbank",
  },
  {
    label: "Settings",
    icon: IconSetting,
    link: "/settings",
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