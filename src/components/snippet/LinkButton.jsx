import React from "react";

import {Link} from "@nextui-org/react";

export const LinkButton =()=> {
  return (
    <div className="flex gap-2">
      <Link isBlock showAnchorIcon href="#" color="foreground">
        Foreground
      </Link>
    </div>
  );
}
