
import IconTeacher from "@/src/assets/auth/Icon-teacher";
import type { HcmCardDataType } from "./hcm-card.types";
import IconStudent from "@/src/assets/auth/Icon-student";
import IconParent from "@/src/assets/auth/Icon-parent";

export const hcmCardData: HcmCardDataType[] = [
  {
    parentId: 1,
    name: "Your Role",
    data: [
      {
        childId: 1,
        name: "Teacher",
        checked: false,
        Icon: IconTeacher,
        value: "Teacher",
      },
      {
        childId: 2,
        name: "Student",
        checked: false,
        Icon: IconStudent,
        value: "Student",
      },
      {
        childId: 3,
        name: "Parent",
        checked: false,
        Icon: IconParent,
        value: "Parent",
      },
      
    ],
  },
 
 
];
