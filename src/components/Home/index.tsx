import React, { memo, useEffect } from "react";
import Image from "next/image";

import "./styles.scss";

export default memo(() => {
  return (
    <div className="content" id="home">
      <div id="content-1">
        <p id="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda
          harum laboriosam laborum veritatis dolorum, aperiam eius nostrum
          recusandae voluptas aut ea aliquam doloribus.
        </p>
      </div>
      <div id="content-2">
        <Image
          src="/image1.jpg"
          alt=""
          width={1920}
          height={980}
          className="photo"
        />
      </div>
    </div>
  );
});
