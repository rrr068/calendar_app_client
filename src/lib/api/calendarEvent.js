import Cookies from "js-cookie";
import client from "./client";

//予定一覧
export const getCalendarEvents = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return;
  return client.get("/calendar_events", {
    headers: {
      "access_token": Cookies.get("_access_token"),
      client: Cookies.get("client"),
      uid: Cookies.get("uid"),
    },
  });
};

//予定作成

//予定更新