export const USERS = "USERS";
export const DONOR_DASHBOARD = "DONOR_DASHBOARD";
export const DONOR_TRANSACTION = "DONOR_TRANSACTION";
export const WITHDRAW_AMOUNT = "WITHDRAW_AMOUNT";
export const USE_CARD = "USE_CARD";

export const TAGS = [USERS];
export const generateTags = (result: any, TAG: string) => {
  return result
    ? [
        ...result.map(({ _id }: any) => ({
          type: TAG,
          id: _id,
        })),
        { type: TAG, id: "LIST" },
      ]
    : [{ type: TAG, id: "LIST" }];
};

export const generateSingleTag = (result: any, TAG: string) => {
  return result
    ? [
        {
          type: TAG,
          id: result._id,
        },
      ]
    : [{ type: TAG, id: "LIST" }];
};
