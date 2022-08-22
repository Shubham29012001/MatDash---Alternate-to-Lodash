import compact from "./compact.js";
import difference from "./difference.js";
import union from "./union.js";
import without from "./without.js";
import pick from "./pick.js";
import omit from "./omit.js";
import get from "./get.js";
import invoke from "./invoke.js";
import merge from "./merge.js";
import indexof from "./indexof.js";
import includes from "./includes.js";
import findlast from "./findLast.js";
import some from "./some.js";
import partition from "./partition.js";
import groupby from "./groupby.js";

import newChain, { makechain } from "./makechain.js";

const _ = {
  compact: compact,
  difference: difference,
  union: union,
  without: without,
  pick: pick,
  omit: omit,
  get: get,
  invoke: invoke,
  merge: merge,
  indexof: indexof,
  includes: includes,
  findlast: findlast,
  some: some,
  partition: partition,
  groupby: groupby,
};

export default _;
