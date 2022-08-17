import compact from "./compact.js";
import difference from "./difference.js";
import union from "./union.js";
import without from "./without.js";
import pick from "./pick.js";
import omit from "./omit.js";
import get from "./get.js";

import newChain, { makechain } from "./makechain.js";

const _ = {
  compact: compact,
  difference: difference,
  union: union,
  without: without,
  pick: pick,
  omit: omit,
  get: get,
};

export default _;
