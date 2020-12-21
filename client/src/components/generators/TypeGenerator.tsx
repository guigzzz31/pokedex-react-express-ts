import { Typography } from "@material-ui/core";
import React from "react";

type TypeProps = { type: string[] };


export default function SkillGenerator({ type }: TypeProps) {

  return (
    <>
      {type
        ? type.map((item: string) => {
          return <Typography key={item}>{item}</Typography>;
        })
        : null}
    </>
  );
}
