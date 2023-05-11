import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import header from "./header";
import about from "./about";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([header, about]),
});
