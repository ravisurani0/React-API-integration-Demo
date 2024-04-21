/* eslint-disable react/prop-types */
import { useState } from "react";

import MDSnackbar from "components/MDSnackbar";
import MDTypography from "components/MDTypography";


function Notification({ color, icon, title, content, dateTime }) {
  const [successSB, setSuccessSB] = useState(true);

  return (
    // <MDTypography variant="body2" color={color}>
    //   {title}
    //   {/* <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
    //     an example link
    //   </MDTypography>
    //   . Give it a click if you like. */}

    // </MDTypography>

    <MDSnackbar
      color={color}
      icon={icon}
      title={title}
      content={content}
      dateTime={dateTime}
      open={successSB}
      onClose={() => { setSuccessSB(false) }}
      close={() => { setSuccessSB(false) }}
      bgWhite
    />
  );
}

export default Notification;
