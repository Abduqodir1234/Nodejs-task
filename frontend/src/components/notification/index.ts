import { notification } from "antd";

//Notfication settings
const openNotification = (title:'success' | 'error',description:string) => {
    notification[title]({
      message: title,
      description:description,
    });
};
export default openNotification;